# ── HELPERS — utility functions shared across the extraction pipeline ──
#
# This file contains:
#   - PDF reading and text extraction (get_latest_file, extract_all_text, pages_to_text)
#   - Section boundary detection (find_section_pages)
#   - LLM caller factory (build_llm_caller)
#   - JSON merging and combining utilities (_deep_merge, _merge_nested_into, combine_nested_role_profiles)
#   - Output formatting (lowercase_keys, write_js_objects)
#
# Private helpers (prefixed with _) are internal utilities not intended to be called directly from main.py.

import os, sys, json, re
from collections import OrderedDict
from copy import deepcopy
from constants import SECTION_KEYWORDS, PROFILE_KEYS, DUAL_PATH_ROLES, OUTPUT_PATH

try:
    import pdfplumber
except ImportError:
    sys.exit("Missing dependency: pip install pdfplumber")


def get_latest_file(path, dbutils):
    """
    Scans through files in our volume and returns the path 
    of the last uploaded file using modification time
    """
    files = [f for f in dbutils.fs.ls(path) if not f.isDir()]

    if not files:
        return None
    else:
        last = max(files, key=lambda f: f.modificationTime)
        return last.path[5:]


def extract_all_text(pdf_path):
    """
    Reads a PDF page by page using pdfplumber.
    For each page, text and tables are extracted separately to avoid duplication —
    characters that fall inside table bounding boxes are filtered out of the text extraction,
    then tables are extracted independently and stored alongside the text.
    Returns: {page_num: [text_string, tables_list]}
    """

    pages = {}
    with pdfplumber.open(pdf_path) as pdf:
        for i, page in enumerate(pdf.pages, start=1):
            contents = []
            
            # find table bounding boxes on this page
            tables = page.find_tables(table_settings={
                "intersection_x_tolerance": 2,
                "intersection_y_tolerance": 30,
                "snap_x_tolerance": 10,
                "snap_y_tolerance": 8
            })
            # filter out any characters that fall inside a table bounding box
            if tables:
                table_bboxes = [t.bbox for t in tables]
                def not_in_table(obj):
                    for bbox in table_bboxes:
                        if (obj["x0"] >= bbox[0] and obj["x1"] <= bbox[2] and
                            obj["top"] >= bbox[1] and obj["bottom"] <= bbox[3]):
                            return False
                    return True
                filtered_page = page.filter(not_in_table)
                text = filtered_page.extract_text() or ""
            else:
                text = page.extract_text() or ""
            # extract tables separately
            extracted_tables = page.extract_tables(table_settings={
                "intersection_x_tolerance": 2,
                "intersection_y_tolerance": 30,
                "snap_x_tolerance": 10,
                "snap_y_tolerance": 8
            }) or ""

            contents.append(text)
            contents.append(extracted_tables)
            pages[i] = contents
    return pages


def find_section_pages(pages):
    """
    Identifies which pages belong to which section of the competency framework.
    
    Input: dict of {page_num: [text_string, [tables]]} (V2 format)
           also handles {page_num: text_string} (V1 format) for backwards compatibility
    
    Returns: dict {section_name: [page_numbers]}
    Sections with no detected anchor return an empty list.
    """

    section_order = ["role_profiles", "annex1", "annex2a", "annex2b", "annex3", "annex4"]
    sorted_pages = sorted(pages.items(), key=lambda x: x[0])
    #{section_name: first_page_number_where_keyword_found}
    anchors = {}

    for sec in section_order:
        keywords = SECTION_KEYWORDS[sec]
        for page_num, content in sorted_pages:

            # handles where content is a list where [0] is text string, [1] is tables
            # edge case: content is a plain string
            # edge case: pages that are tables only and have an empty text string
            if isinstance(content, list):
                text = content[0] if content and isinstance(content[0], str) else ""
            else:
                text = content
            text_lower = text.lower()

            # record keywords pages, continue until new keyword page foud
            if any(kw in text_lower for kw in keywords):
                anchors.setdefault(sec, page_num)
                break  

    #build section, start tuples sorted so we can determine boundaries
    anchored_sections = [(sec, anchors[sec]) for sec in section_order if sec in anchors]
    anchored_sections.sort(key=lambda x: x[1])

    #initialize output dict and all page numbers
    section_pages = {sec: [] for sec in section_order}
    all_page_nums = [p for p, _ in sorted_pages]

    for i, (sec, start_page) in enumerate(anchored_sections):
        
        # the section runs from its start page up to (but not including) the next section's start page
        # if this is the last section, it runs to the end of the document
        if i + 1 < len(anchored_sections):
            next_start = anchored_sections[i + 1][1]
        else:
            next_start = float("inf")

        # assign all page numbers that fall within this section's boundary
        section_pages[sec] = [p for p in all_page_nums if start_page <= p < next_start]

    return section_pages


def pages_to_text(pages, page_nums):
    """
    Builds a clean string from the specified pages to send to the LLM.
    
    Strategy:
    - Always include text (content[0]) — captures prose like core objectives
    - If tables exist (content[1] is a list) — also append serialized tables
    - Both included per page since they capture different content:
      text has prose/objectives (table regions already stripped in extract_all_text),
      tables have clean structured KPI/competency data
    """
    chunks = []

    for p in page_nums:
        if p not in pages:
            continue

        content = pages[p]
        text = content[0] if isinstance(content[0], str) else ""
        tables = content[1] if len(content) > 1 else ""

        page_parts = []

        # always include text if it has content
        if text.strip():
            page_parts.append(text.strip())

        # if tables exist, serialize and append them
        if isinstance(tables, list) and len(tables) > 0:
            for table in tables:
                table_lines = []
                for row in table:
                    cells = [str(cell).strip() for cell in row if cell is not None]
                    if any(cells):
                        table_lines.append(" | ".join(cells))
                if table_lines:
                    page_parts.append("TABLE:\n" + "\n".join(table_lines))

        if page_parts:
            chunks.append(f"--- PAGE {p} ---\n" + "\n\n".join(page_parts))

    return "\n\n".join(chunks)


#provider is llm service (dbx), model is the endpoint name, host and token default to None
def build_llm_caller(provider, model="databricks-meta-llama-3-3-70b-instruct", api_key=None, 
                     databricks_host=None, databricks_token=None): 
    """ 
    Factory function — call once at startup to get an ask() callable.
    Isolates all provider-specific code in one place so the rest of the pipeline
    doesn't need to know which LLM is being used.
    Currently supports: "databricks"
    To add a new provider, add an elif branch
    """ 
    #ensures that the right provider is selected and that the imports are working correctly. inside dbx it always works. 
    if provider == "databricks": 
        try: 
            from databricks.sdk import WorkspaceClient 
            from databricks.sdk.service.serving import ChatMessage, ChatMessageRole 
        except ImportError: 
            sys.exit("pip install databricks-sdk") 

        #workspace client below handles this authenitcation automatically, but again outside of dbx we would have to pass a host/token pair
        # host  = databricks_host  or os.environ.get("DATABRICKS_HOST") 
        # token = databricks_token or os.environ.get("DATABRICKS_TOKEN") 
        # if not host or not token: 
        #     sys.exit("Databricks: provide --databricks-host and --databricks-token") 

        #this creates the actual connection to the workspace were in. this is the object we use to talk to the model serving endpoints
        #client = WorkspaceClient(host=host, token=token) 
        
        client = WorkspaceClient()
        
        #this is a function inside an outer function, pattern called CLOSURE!!!
        #it automatically has access to client and model through inheritance of the variables, hence you don't have to pass them around
        def ask(system_prompt, user_prompt): 
            #actual api call. query hits the endpoint, messages has the system prompt (instructions) and user prompt (pdf text)
            response = client.serving_endpoints.query( 
                name = model,
                messages=[ 
                    ChatMessage(role=ChatMessageRole.SYSTEM, content=system_prompt), 
                    ChatMessage(role=ChatMessageRole.USER,   content=user_prompt), 
                ], 
                max_tokens=4096, 
            ) 
            return response.choices[0].message.content

    else: 
        sys.exit(f"Unknown provider '{provider}'. Choose: databricks") 

    return ask 


def _dedupe_preserve_order(seq):
    if not isinstance(seq, list):
        return []
    seen = OrderedDict()
    for x in seq:
        s = str(x).strip()
        if s and s not in seen:
            seen[s] = None
    return list(seen.keys())


def _deep_merge(a, b):
    """
    Merge b into a.
    - dict + dict: keywise deep merge
    - list + list: concatenate and dedupe (preserve order)
    - other: prefer b if truthy; else keep a
    Returns a *new* merged object (does not mutate inputs).
    """
    if isinstance(a, dict) and isinstance(b, dict):
        out = deepcopy(a)
        for k, v in b.items():
            if k in out:
                out[k] = _deep_merge(out[k], v)
            else:
                out[k] = deepcopy(v)
        return out
    if isinstance(a, list) and isinstance(b, list):
        return _dedupe_preserve_order(a + b)
    # scalar fallbacks
    return deepcopy(b) if b not in (None, "", [], {}) else deepcopy(a)


def _ensure_role_path(result, role, path):
    if role not in result:
        result[role] = {}
    if path not in result[role]:
        result[role][path] = {
            "KPI": {},
            "Core Objectives": {},
            "Competency Dimensions": {},
            "Focus": [],
            "Indicators of Readiness": []
        }


def _merge_nested_into(base, incoming):
    """
    Merge an incoming nested block:
    {
      "<Role>": {
        "<Path>": {
          "<Section>": <content>
        }
      }
    }
    into base (same shape).
    """
    if not isinstance(incoming, dict):
        return base
    out = deepcopy(base)
    for role, paths in incoming.items():
        if not isinstance(paths, dict):
            continue
        for path, sections in paths.items():
            _ensure_role_path(out, role, path)
            if not isinstance(sections, dict):
                continue
            for section, content in sections.items():
                if section not in PROFILE_KEYS:
                    # unknown section key; skip or include as-is if you want
                    continue
                out[role][path][section] = _deep_merge(out[role][path][section], content)
    return out


def _apply_dual_path_rule(result):
    """
    For dual-path roles:
      - If "All" exists, merge/duplicate its content into "Leadership" and "Expert"
        (without overwriting existing specific-path content), then remove "All".
    """
    for role in list(result.keys()):
        if role not in DUAL_PATH_ROLES:
            continue
        paths = result.get(role, {})
        if "All" not in paths:
            continue

        all_block = paths["All"]

        # Ensure both specific paths exist
        for p in ("Leadership", "Expert"):
            _ensure_role_path(result, role, p)
            # Merge each section: specific path content has priority; "All" fills gaps
            for section in PROFILE_KEYS:
                specific = result[role][p].get(section, {} if section != "Focus" and section != "Indicators of Readiness" else [])
                from_all = all_block.get(section, {} if section != "Focus" and section != "Indicators of Readiness" else [])
                # Merge "All" into specific (specific wins on conflicts)
                merged = _deep_merge(from_all, specific)
                result[role][p][section] = merged

        # Remove "All" after duplication
        result[role].pop("All", None)


def combine_nested_role_profiles(
    kpi_nested=None,
    core_objectives_nested=None,
    competency_dims_nested=None,
    focus_nested=None,
    readiness_nested=None,
):
    """
    Combine multiple nested section blocks (each already shaped as
    {role: {path: {SectionName: content}}}) into one final nested result:
    {
      role: {
        path: {
          "KPI": {...},
          "Core Objectives": {...},
          "Competency Dimensions": {...},
          "Focus": [...],
          "Indicators of Readiness": [...]
        }
      }
    }

    Dual-path rule applied for:
      Director, Associate Director, Senior Manager, Manager
    """
    result = {}

    for block in (kpi_nested, core_objectives_nested, competency_dims_nested, focus_nested, readiness_nested):
        if block:
            result = _merge_nested_into(result, block)

    # Apply dual-path duplication/merge for the four roles
    _apply_dual_path_rule(result)

    # Ensure all paths have all section keys present (empty if missing)
    for role, paths in result.items():
        for path, payload in paths.items():
            for section in PROFILE_KEYS:
                if section not in payload:
                    payload[section] = {} if section not in ("Focus", "Indicators of Readiness") else []

            # Final tidy: dedupe lists
            payload["Focus"] = _dedupe_preserve_order(payload["Focus"])
            payload["Indicators of Readiness"] = _dedupe_preserve_order(payload["Indicators of Readiness"])

    return result


def lowercase_keys(obj):
    """
    Recursively lowercase all dictionary keys.
    - If obj is a dict: returns a new dict with keys lowercased and values preserved
      (recursing only into dicts/lists to keep structure, but never changing scalar values).
    - If obj is a list: returns a new list where dict elements have their keys lowercased,
      and non-dict elements are left untouched.
    - Scalars are returned unchanged.
    """
    if isinstance(obj, dict):
        return {str(k).lower(): lowercase_keys(v) for k, v in obj.items()}
    elif isinstance(obj, list):
        # Recurse into dict/list elements to adjust keys where needed,
        # but do not modify scalar values in lists
        return [lowercase_keys(v) for v in obj]
    else:
        # Scalar value: leave it exactly as-is (no lowercasing)
        return obj

def write_js_objects(objects: dict, output_path=OUTPUT_PATH):
    """
    Takes a dict of Python objects and writes a JS file where each entry
    becomes an exported JS variable.

    Example:
        write_js_objects({
            "annex1": annex1,
            "annex3": annex3,
            "annex4": annex4,
            "role_profiles": role_profiles
        })

    Produces:
        export const annex1 = {...};
        export const annex3 = {...};
        export const annex4 = {...};
        export const roleProfiles = {...};
    """

    js_lines = []

    for var_name, obj in objects.items():

        # Convert Python variable name to JS-safe camelCase
        # role_profiles → roleProfiles
        cleaned = re.sub(r'[^a-zA-Z0-9]+', ' ', var_name).title().replace(" ", "")
        js_var = cleaned[0].lower() + cleaned[1:]

        # Dump JSON without modifying values
        json_str = json.dumps(obj, indent=2)

        js_lines.append(f"const {js_var} = {json_str};\n\n")

    with open(output_path, "w") as f:
        f.writelines(js_lines)

    print(f"JS file written to: {output_path}")
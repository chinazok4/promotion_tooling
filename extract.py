# ── EXTRACT — LLM-powered extraction functions for the competency framework pipeline ──
#
# Each function takes an `ask` callable (built by build_llm_caller in helpers.py)
# and a text string, sends a structured prompt to the LLM, and returns parsed JSON.
#
# Functions in this file:
#   - extract_role_kpis                      — KPI targets by role and path
#   - extract_competency_dimensions          — competency dimension levels by role and path
#   - extract_core_objectives                — core objectives by role and path
#   - extract_focus                          — focus bullet points by role and path
#   - extract_single_path_readiness_indicators — IOR for single-path roles (regex, no LLM)
#   - extract_dualpath_readiness_indicators  — IOR for dual-path roles (LLM)
#   - extract_annex1                         — competency level definitions
#   - extract_annex3                         — managed revenue definition and formula
#   - extract_annex4                         — AI adoption KPI criteria and scoring
#
# Note: extract_single_path_readiness_indicators is the only function here that does NOT
# use the LLM — it parses the PDF text directly using regex and string matching.

import json, re
from collections import OrderedDict
from constants import COMMON_SYSTEM_INTRO
from helpers import pages_to_text

def extract_role_kpis(ask, text):
    system = COMMON_SYSTEM_INTRO + """
    You extract ONLY KPIs from the provided text and return one nested JSON object.

    GOAL
    - Return ONE JSON object (not an array).
    - Shape: role → path → section → objectives
    - Keys:
    - Top level: role name exactly as written (e.g., "Associate Director")
    - Second level: "Leadership", "Expert", or "All"
    - Third level: a single key "KPI" whose value is a JSON with optional KPI keys and values

    PATH DECISION RULES (CRITICAL)
    - If the role is clearly split by path (e.g., two columns, or labels “Leadership Path” vs “Expert Path”):
    ➜ create TWO path objects: "Leadership" and "Expert".
    - Otherwise:
    ➜ create ONE path object: "All".

    Optional KPI keys (include ONLY if explicitly present in the text; omit otherwise):
    - "revenue managed"
    - "utilisation"            # use UK spelling: 'utilisation'
    - "sales originated"
    - "sales supported"
    - "assets"
    - "bids supported"
    - "ai adoption"
    - "delivery quality"
    - "content and innovation"
    - "people development"
    - "collaboration"

    Normalization & formatting rules:
    - The role "Director" has the path "Leadership" change this to "All"
    - If a KPI value has clarifications/context (e.g., "3dpw"), append in parentheses: "60% (3dpw)".
    - Do NOT include any keys besides the ones listed above.
    - Do NOT invent values; if a KPI is not present, omit that KPI key entirely.
    - Preserve currency symbols and ranges exactly as written (e.g., "£2.5M-£3.5M").

    """
    prompt = f"Extract the KPI targets by role/path from this text only:\n\n{text}"
    return json.loads(ask(system, prompt))


def extract_competency_dimensions(ask, text):
    system = COMMON_SYSTEM_INTRO + """
    You extract ONLY "Competency Dimensions" from the provided text and return one nested JSON object.

    GOAL
    - Return ONE JSON object (not an array).
    - Shape: role → path → section → objectives
    - Keys:
    - Top level: role name exactly as written (e.g., "Associate Director")
    - Second level: "Leadership", "Expert", or "All"
    - Third level: a single key "Competency Dimensions" whose value is a JSON with optional Competency Dimension keys and values

    PATH DECISION RULES (CRITICAL)
    - If the role is clearly split by path (e.g., two columns, or labels “Leadership Path” vs “Expert Path”):
    ➜ create TWO path objects: "Leadership" and "Expert".
    - Otherwise:
    ➜ create ONE path object: "All".

    Optional Competency Dimension keys (include ONLY if explicitly present in the text; omit otherwise):

    - "consulting behaviours"
    - "delivery",
    - "business development"
    - "people development"
    - "content & innovation"
    - "client development"
    - "core consulting skills"
    
    Normalization & formatting rules:
    - If an optional Competency Dimension value has clarifications/context (e.g., "Annex 1.1"), append as nested array: ["Proficient", "Annex 1.1"].
    - Do NOT include any keys besides the ones listed above.
    - Do NOT invent values; if a Competency Dimension is not present, omit that Competency Dimension key entirely.

    """
    return json.loads(ask(system, f"Extract the competency dimension values by role/path from this text only:\n\n{text}")) 


def extract_core_objectives(ask, text):
    system = COMMON_SYSTEM_INTRO + """

    You extract ONLY “Core Objectives” from the provided text and return one nested JSON object.

    GOAL
    - Return ONE JSON object (not an array).
    - Shape: role → path → section → objectives
    - Keys:
    - Top level: role name exactly as written (e.g., "Associate Director")
    - Second level: "Leadership", "Expert", or "All"
    - Third level: a single key "Core Objectives" whose value is an object mapping objective names to descriptions

    PATH DECISION RULES (CRITICAL)
    - If the role is clearly split by path (e.g., two columns, or labels “Leadership Path” vs “Expert Path”):
    ➜ create TWO path objects: "Leadership" and "Expert".
    - Otherwise:
    ➜ create ONE path object: "All".

    PARSING RULES (OBJECTIVE LINES)
    - Each objective line follows one of:
    <objective name> – <objective description>
    <objective name> - <objective description>
    - Remove bullet symbols, but preserve punctuation.
    - Strip surrounding whitespace.
    - Join wrapped lines into the previous objective value.
    - Use the text before the dash as the JSON key (keep the original casing & spacing as seen in the text).
    - Use the text after the dash as the JSON value.

    CONSTRAINTS
    - Do NOT invent objectives.
    - Do NOT copy from other sections (e.g., Focus, KPIs, Competency Dimensions).
    - Do NOT output more than the required nesting.
    - Return a single JSON object ONLY (no commentary, no markdown).
    
    Example of expected JSON structure:

    {
    "Associate Director": {
        "Leadership": {
        "Core Objectives": {
            "Commercial Leadership": "Drive revenue and margin ...",
            "Client Impact & Delivery": "Act as executive sponsor ..."
        }
        },
        "Expert": {
        "Core Objectives": {
            "Commercial Leadership": "Drive revenue and margin ...",
            "Client Impact & Delivery": "Act as executive sponsor ..."
        }
        }
    }
    }
    """
    return json.loads(ask(system, f"Extract the core objective values by role/path from this text only:\n\n{text}"))


def extract_focus(ask, text):
    system = COMMON_SYSTEM_INTRO + """
    You extract ONLY Focus from the provided text and return one nested JSON object.

    GOAL
    - Return ONE JSON object (not an array).
    - Shape: role → path → section → objectives
    - Keys:
    - Top level: role name exactly as written (e.g., "Associate Director")
    - Second level: "Leadership", "Expert", or "All"
    - Third level: a single key "Focus" whose value is a list of focus bullet points

    PATH DECISION RULES (CRITICAL)
    - If the role is clearly split by path (e.g., two columns, or labels “Leadership Path” vs “Expert Path”):
    ➜ create TWO path objects: "Leadership" and "Expert".
    - Otherwise:
    ➜ create ONE path object: "All".

    Normalization & formatting rules:
    - The role "Director" has the path "Leadership" change this to "All"
    - Each bullet point should be stored as a list item under the focus key.
    - Strip surrounding whitespace.
    - Preserve punctuation inside the description.
    - For multi-line bullets, join continuation lines into one sentence.
    - Remove the bullet symbol.
    
    Example of expected JSON structure:

    {
    "Director": {
        "All": {
        "Focus": [
            "Works globally across practices, sectors, and geographies, ensuring consistency and alignment.",
            "Partners with Sector Leads, Solution Leads, Finance, Sales, Marketing, and Client Leadership Teams to drive sustainable growth.",
            "Collaborates with Kubrick's executive leadership to deliver on strategic priorities and Board-level outcomes.",
            "Represents Kubrick externally as a thought leader and trusted advisor to C-level executives."
        ]
        }
    }
    }

    """
    return json.loads(ask(system, f"Extract the focus values by role/path from this text only:\n\n{text}"))


def extract_single_path_readiness_indicators(pages, page_range):

    """
    Extract Indicators of Readiness from pages that contain a header like:
        'Focus | Indicators of Readiness for <TARGET GRADE>'
    and return a nested JSON structure that ALWAYS uses path "All":

    {
      "<Role>": {
        "All": {
          "Indicators of Readiness": [ "...", "..." ]
        }
      }
    }

    Parameters
    ----------
    pages : dict
        Output of extract_all_text(), i.e. {page_num: [text, tables]} or compatible with pages_to_text.
    page_range : iterable[int]
        Page numbers to scan.

    Notes
    -----
    - This function assumes the Indicators list is in the RIGHT column of
      a 'Focus | Indicators of Readiness for ...' row and subsequent wrapped lines.
    - If the same (role) appears across multiple pages, bullets are merged and deduplicated
      while preserving order.
    """

    nested = {}

    for page_num in page_range:
        raw = pages_to_text(pages, [page_num])
        if not raw:
            continue

        # Match two-column header and capture target grade and rest of page
        m = re.search(r'Focus \|\s*Indicators of Readiness for (.+?)\n(.*)', raw, re.DOTALL | re.IGNORECASE)
        if not m:
            continue

        target_grade = (m.group(1) or "").strip()
        rest = m.group(2) or ""

        # Take the RIGHT column content after the LAST ' | '
        parts = rest.split(' | ')
        if len(parts) < 2:
            continue
        indicator_block = parts[-1]

        # Parse bullets, joining wrapped lines into the previous bullet
        bullets = []
        current = None
        for line in indicator_block.split('\n'):
            stripped = line.strip()
            if not stripped:
                continue

            # Starts a new bullet? handle common PDF bullet glyphs
            if stripped.startswith('\uf0b7') or stripped.startswith('•') or stripped.startswith('▪'):
                if current:
                    bullets.append(current)
                current = stripped.lstrip('\uf0b7').lstrip('•').lstrip('▪').strip()
            else:
                # Continuation of prior bullet
                if current is not None:
                    current += ' ' + stripped

        if current:
            bullets.append(current)

        # Basic quality filter
        bullets = [b for b in bullets if len(b) > 5]

        if not bullets or not target_grade:
            continue

        role_key = target_grade  # keep original case from source
        path_key = "All"         # ALWAYS "All" as requested

        # Ensure nested containers
        if role_key not in nested:
            nested[role_key] = {}
        if path_key not in nested[role_key]:
            nested[role_key][path_key] = {"Indicators of Readiness": []}

        # Merge + dedupe while preserving order
        existing = nested[role_key][path_key]["Indicators of Readiness"]
        seen = OrderedDict((b, None) for b in existing)
        for b in bullets:
            if b not in seen:
                seen[b] = None
        nested[role_key][path_key]["Indicators of Readiness"] = list(seen.keys())

    return nested


def extract_dualpath_readiness_indicators(ask, text):
    system = COMMON_SYSTEM_INTRO + """
    You extract ONLY “Indicators of Readiness” from the provided text and return ONE nested JSON object.

    OUTPUT (STRICT)
    - Return ONE JSON object ONLY (no array, no commentary, no code fences).
    - Shape: { "<role>": { "<path>": { "Indicators of Readiness": [ <bullet>, ... ] } } }
    - <role> = role name exactly as written after a heading that contains "Indicators of Readiness for" (e.g., "Associate Director")
    - <path> = exactly "Leadership", "Expert", or "All"
    - "Indicators of Readiness" = array of strings, each bullet EXACTLY as written (no paraphrasing, no merging)

    PATH DECISION RULES (CRITICAL)
    - If indicators are clearly split by path (two columns or explicit labels “Leadership Path” vs “Expert Path”), create TWO siblings: "Leadership" and "Expert".
    - Otherwise, create ONE sibling: "All".

    SPECIAL CASE: "Indicators of Readiness for Director" and "Indicators of Readiness for Director / Chief Technologist"
    are the SAME grade but different paths — treat them as a dual path pair:
    - "Indicators of Readiness for Director"                      → role "Director", path "Leadership"
    - "Indicators of Readiness for Director / Chief Technologist" → role "Director", path "Expert"

    DOs / DON'Ts
    - DO extract only bullets that appear directly under an "Indicators of Readiness" heading in THIS text.
    - DO join wrapped lines within the SAME bullet.
    - DO NOT include "Focus" bullets, KPIs, or other sections.
    - DO NOT add any text outside the JSON object.
    - DO NOT return an array; return exactly one JSON object at top level.

    EXAMPLE SHAPE (do not copy content):
    {
    "Associate Director": {
        "Leadership": { "Indicators of Readiness": ["bullet 1", "bullet 2"] },
        "Expert":     { "Indicators of Readiness": ["bullet 1", "bullet 2"] }
    }
    }
    """
    prompt = f"Extract all Indicators of Readiness from the text below. Return ONE JSON object only:\n\n{text}"
    return json.loads(ask(system, prompt))


def extract_annex1(ask, text):
    system = COMMON_SYSTEM_INTRO + """
    You will extract competency framework definitions grouped by dimension.

    Return ONLY a JSON object. The top-level key must be "annex1".
    Under it, each competency dimension is a snake_case key (e.g. "consulting_behaviours").
    Each dimension must contain ONLY the following keys:

    Required:
    - "definition"     (the overall competency description)
    - "exposure"       (proficiency level definition)
    - "developing"     (proficiency level definition)
    - "proficient"     (proficiency level definition)
    - "mastered"       (proficiency level definition)

    Formatting rules:
    - Use snake_case for all dimension keys (e.g. "core_consulting_skills", "people_development")
    - Extract definitions exactly as written — do not summarise or paraphrase
    - Do NOT include any keys besides the ones listed above
    - Output must be a valid JSON object and nothing else
    """

    prompt = f"Extract the Annex 1 competency framework from the text below:\n\n{text}"
    return json.loads(ask(system, prompt))


def extract_annex3(ask, text):
    system = COMMON_SYSTEM_INTRO + """
    You will extract key information from an Annex describing Managed Revenue.

    Return ONLY a JSON object with the top-level key "annex3".
    Under it, include ONLY the following keys:

    - "definition"     (what managed revenue is and what it is based on)
    - "formula"        (the universal formula as a clean readable string)
    - "illustration"   (the worked example showing how to calculate managed revenue)
    - "caveats"        (list of clarification/caveat bullet points as an array of strings)

    Formatting rules:
    - Preserve numbers, currency symbols, and calculations exactly as written
    - "caveats" must be a JSON array of strings, one per bullet point
    - Do NOT summarise or paraphrase — extract as written
    - Output must be a valid JSON object and nothing else
    """

    prompt = f"Extract the Annex 3 managed revenue information from the text below:\n\n{text}"
    return json.loads(ask(system, prompt))


def extract_annex4(ask, text):
    system = COMMON_SYSTEM_INTRO + """
    You will extract information from an Annex about Data and AI Adoption KPIs.

    Return ONLY a JSON object with the top-level key "annex4".
    Under it, include the following keys:

    - "purpose"               (string — what the annex is for)
    - "score_calculation"     (string — how the quarterly KPI score is calculated)
    - "what_is_counted"       (array of strings — each bullet of what counts)
    - "evidence_and_approval" (array of strings — each bullet on evidence requirements)
    - "role_labels"           (object with keys: "owner", "contributor", "reviewer" — each a string definition)
    - "criteria"              (array of objects, one per ID row in the table)

    Each object in "criteria" must contain ONLY:
    - "id"                (integer)
    - "assessed_criteria" (string)
    - "measured_by"       (array of strings — one per bullet)
    - "scoring"           (array of strings — one per bullet, preserve all numbers and symbols)

    Formatting rules:
    - Preserve all scoring values exactly as written (e.g. "5 points for each owner", "5 bonus points where productivity enhancements >15%")
    - Do NOT merge or summarise bullet points — each bullet is its own array element
    - The "criteria" array must contain all 5 IDs
    - Output must be a valid JSON object and nothing else
    """

    prompt = f"Extract the Annex 4 Data and AI Adoption information from the text below:\n\n{text}"
    return json.loads(ask(system, prompt))
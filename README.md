# Promotion Princess — Competency Framework Tool

A two-part project that extracts the Kubrick competency framework from a PDF and serves it as an interactive self-assessment web tool.

---

## Repository Structure

```
promotion_princess/
├── promotion_princess_frontend/
│   ├── index.html          # App shell — loads all scripts and defines the page structure
│   ├── styles.css          # All styling
│   ├── main.js             # All app logic — page rendering, section builders, PDF/CSV export
│   └── data.js             # All reference data — role profiles, annex definitions
│
├── main.py                 # Entry point — orchestrates the full extraction pipeline
├── extract.py              # LLM extraction functions for each section of the framework
├── helpers.py              # Shared utilities — PDF reading, text parsing, merging, output
├── constants.py            # Configuration — paths, section keywords, role lists
├── test_helpers.py         # Unit tests for core helper functions
├── requirements.txt        # Python dependencies
└── README.md
```

---

## How It Works

### Backend — PDF Extraction Pipeline

The backend reads the latest version of the competency framework PDF from a Databricks volume, extracts each section using an LLM, and writes the results as a `data.js` file that the frontend can read directly.

**Pipeline steps (main.py):**

1. **Find PDF** — scans the source volume and picks the most recently uploaded file
2. **Extract text** — reads every page with `pdfplumber`, separating prose and tables
3. **Identify sections** — scans for keyword anchors to determine which pages belong to which section
4. **Connect to LLM** — builds a reusable `ask()` caller pointed at a Databricks model serving endpoint
5. **Extract data** — calls a dedicated extraction function for each section (KPIs, objectives, competency dimensions, focus, indicators of readiness, annexes)
6. **Export** — combines all extracted data into a single `data.js` file ready for the frontend

The pipeline is designed to run inside Databricks. Authentication is handled automatically by the `WorkspaceClient` when running inside a Databricks notebook or job.

### Frontend — Self-Assessment Tool

A static web tool. Users select their role and path, view their full competency profile, fill in self-assessment notes, and download a PDF or CSV.

NOTE: Should this be served on sharepoint? hub.kubrick?

**Key behaviours:**
- `data.js` must load before `main.js` — all role and annex data is declared as global constants
- Roles with both a Leadership and Expert path are split at the dropdown level — each selection renders a clean single-path view
- Indicators of Readiness shown on each role's page are pulled from the **next role up**, matched to the same path where possible
- The CSV export produces one header row and one data row per person, designed for easy side-by-side comparison in Excel

---

## Frontend Files

| File | Purpose |
|---|---|
| `index.html` | Page structure, role dropdown, script loading order |
| `styles.css` | All visual styling including responsive breakpoints |
| `main.js` | Page rendering, all `build*` functions, PDF and CSV export |
| `data.js` | `annex1`, `annex3`, `annex4`, `roleProfiles` — edit this to update content |

**To update role data or annex definitions, only edit `data.js`.**

---

## Backend Files

| File | Purpose |
|---|---|
| `main.py` | Orchestration only — imports and calls everything else |
| `extract.py` | One extraction function per framework section, each with its own LLM prompt |
| `helpers.py` | PDF reading, section detection, text serialisation, merging, output writing |
| `constants.py` | All configuration — file paths, page ranges, section keywords, role lists |

---

## Configuration (constants.py)

If the source PDF changes structure (new pages, renamed sections, new roles), update `constants.py` first:

- `DUAL_PATH_PAGES` / `SINGLE_PATH_PAGES` — page ranges for readiness indicator extraction
- `SECTION_KEYWORDS` — keywords used to detect where each section starts
- `DUAL_PATH_ROLES` — roles that get split into Leadership and Expert paths
- `SOURCE_PATH` / `OUTPUT_PATH` — Databricks volume paths for input and output

---

## Dependencies

```
pdfplumber==0.11.9
```

The Databricks SDK (`databricks-sdk`) is a pre-installed environment dependency inside Databricks and does not need to be in `requirements.txt`.

---

## Running the Pipeline

The pipeline is designed to run inside a Databricks notebook or job. Import and call `main()`:

```python
from main import main
main()
```

To run outside Databricks you would need to update `build_llm_caller` in `helpers.py` to pass a `host` and `token` explicitly, and update the volume paths in `constants.py` to local paths.

---

## Updating the Frontend Data

When a new version of the competency framework PDF is available:

1. Upload the new PDF to the Databricks source volume
2. Run the extraction pipeline — it will automatically pick up the latest file
3. Copy the output `data.js` into `promotion_princess_frontend/`
4. Upload the updated folder to ?sharepoint?

No code changes are needed unless the PDF structure has changed.
If PDF structure changes, see the refactoring guide below.

---

## Adding a New Role

**In the backend (`constants.py`):**
- Add the role to `DUAL_PATH_ROLES` if it has Leadership/Expert paths
- Update `DUAL_PATH_PAGES` or `SINGLE_PATH_PAGES` if it appears on new pages

**In the frontend (`data.js`):**
- Add the role's data object under `roleProfiles` following the existing structure

**In the frontend (`index.html`):**
- Add the role as an `<option>` in the dropdown using the `"role::path"` value format
- For dual-path roles, use an `<optgroup>` with separate Leadership and Expert options

**In the frontend (`main.js`):**
- Add the role to `NEXT_ROLE_KEY` and `NEXT_ROLE` so the Indicators of Readiness section works correctly

---

## If the PDF Structure Changes

This section covers what to update if the competency framework PDF is restructured —
new sections, renamed headings, different page layouts, or new roles.

### Section headings renamed or moved
If a section like "Annex 3: Managed Revenue" is renamed or starts on a different page:
- Update the relevant entry in `SECTION_KEYWORDS` in `constants.py`
- The keyword just needs to be a lowercase substring of whatever appears on the section's first page
- `find_section_pages` in `helpers.py` will automatically pick up the new boundary

### Page ranges changed (for readiness indicators)
Indicators of Readiness are extracted differently for single-path vs dual-path roles
because the PDF layout differs between them. If roles move to different pages:
- Update `SINGLE_PATH_PAGES` and `DUAL_PATH_PAGES` in `constants.py`
- `SINGLE_PATH_PAGES` uses regex parsing (no LLM) — it expects a two-column layout with
  a `Focus | Indicators of Readiness for <Role>` header. If that header format changes,
  update the regex in `extract_single_path_readiness_indicators` in `extract.py`
- `DUAL_PATH_PAGES` uses the LLM — if the layout changes significantly, update the
  system prompt in `extract_dualpath_readiness_indicators` in `extract.py`

### A section is added or removed from the framework
If a new section appears (e.g. "Annex 5") or an existing one is removed:
- Add/remove it from `SECTION_KEYWORDS` in `constants.py`
- Add/remove the corresponding extraction function in `extract.py` following the same pattern
- Add/remove the call and `json_dict` assignment in `main.py`
- Add/remove the key from `JSON_FIELDS` in `constants.py`
- If it's a new role profile section key (e.g. alongside KPI, Focus etc.), also update
  `PROFILE_KEYS` in `constants.py` — this controls what `combine_nested_role_profiles`
  in `helpers.py` expects and initialises

### A role is added or removed
See the **Adding a New Role** section above for the frontend changes.
For the backend, also:
- Update `DUAL_PATH_ROLES` in `constants.py` if the new role has two paths
- Update `DUAL_PATH_PAGES` or `SINGLE_PATH_PAGES` in `constants.py` to include its pages
- The LLM prompts in `extract.py` use path decision rules that are content-driven,
  so they should handle a new role automatically without prompt changes

### The KPI or competency dimension keys change
The allowed keys for KPIs and competency dimensions are hardcoded in the LLM system prompts
in `extract.py` (in `extract_role_kpis` and `extract_competency_dimensions`).
If new KPI types or dimension names are introduced:
- Update the allowed keys list in the relevant system prompt in `extract.py`
- Update `COMPETENCY_DISPLAY_NAMES` in `main.js` if a competency dimension is renamed,
  so it displays correctly in the frontend
- Update `ROLES_WITH_REVENUE` in `main.js` if revenue KPI applicability changes

### The two-column / dual-path layout changes
The dual-path rule (Leadership vs Expert) is enforced in two places:
- The LLM prompts in `extract.py` instruct the model to split by path when two columns
  are detected — if the visual layout changes, update the PATH DECISION RULES section
  of the relevant prompts
- `_apply_dual_path_rule` in `helpers.py` handles cases where the LLM returns "All"
  instead of splitting — this acts as a fallback and should not need changing

# ── CONSTANTS — configuration and shared values for the competency framework extraction pipeline ──
#
# This file is the single source of truth for:
#   - The section/profile keys expected in extracted role data
#   - Which roles and pages are dual-path vs single-path in the source PDF
#   - Keywords used to identify sections when parsing the PDF
#   - File paths for input (PDF source) and output (parsed JSON)
#   - The shared system prompt prefix used in all Claude API calls
#
# If the source PDF structure changes (e.g. new pages, renamed sections),
# update SECTION_KEYWORDS, DUAL_PATH_PAGES, and SINGLE_PATH_PAGES here first.

PROFILE_KEYS = (
    "KPI",
    "Core Objectives",
    "Competency Dimensions",
    "Focus",
    "Indicators of Readiness",
)

DUAL_PATH_ROLES = ["Director", "Associate Director", "Senior Manager", "Manager"]

DUAL_PATH_PAGES = list(range(2,10))

SINGLE_PATH_PAGES = list(range(10, 19))

SECTION_KEYWORDS = {
    "role_profiles": ["role profile"],
    "annex1": ["annex 1: competency framework"],
    "annex2a": ["annex 2a: consulting skills progression"],
    "annex2b": ["annex 2b: technical skills progression"],
    "annex3": ["annex 3: managed revenue"],
    "annex4": ["annex 4: data and ai adoption"]}


OUTPUT_PATH = "/Volumes/promotion_princess/framework/parsed/data.js"

JSON_FIELDS = ["annex1", "annex3", "annex4", "role_profiles"] 

COMMON_SYSTEM_INTRO = (
    "You are a structured data extractor working with HR competency framework documents."
    "Return ONLY a valid JSON object. No markdown, no code fences, no explanation. "
    )

SOURCE_PATH = "/Volumes/promotion_princess/framework/cf_pdf"
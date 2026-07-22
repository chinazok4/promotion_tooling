# ── MAIN — entry point for the competency framework extraction pipeline ──
#
# Works only in databricks as a result of our workspace initialization. Promotion princess workspace, the competency framework lives as a volume in the workspace.
# in helpers there is skeleton code for running it outside of DBX using the OS library
#
# Orchestrates the full extraction process in sequence:
#   1. Finds the latest version of the competency framework PDF
#   2. Extracts raw text page by page
#   3. Identifies which pages belong to which section
#   4. Connects to the LLM (Databricks by default)
#   5. Extracts each data section (KPIs, objectives, competencies, etc.) via LLM calls
#   6. Combines and exports the results as JS-ready JSON objects
#
# All extraction logic lives in extract.py
# All helper utilities live in helpers.py
# All configuration (paths, constants) lives in constants.py

from pyspark.sql import SparkSession
from pyspark.dbutils import DBUtils
from extract import *
from helpers import * 
from constants import SOURCE_PATH, JSON_FIELDS, DUAL_PATH_PAGES, SINGLE_PATH_PAGES

spark = SparkSession.builder.getOrCreate()
dbutils = DBUtils(spark)

def main():

    # Step 1 — Get the latest PDF file
    path = get_latest_file(SOURCE_PATH, dbutils)
    print(f"Reading {path}...")

    # Step 2 — Extract raw text from every PDF page
    pages = extract_all_text(path)
    print(f"{len(pages)} pages loaded") 

    # Step 3 — Identify which pages belong to which section by keyword scanning 
    sections = find_section_pages(pages)

    # Step 4 — Connect to LLM provider 
    print("Connecting to LLM caller...")
    ask = build_llm_caller(provider="databricks")

    # Step 5 -- Convert text to JSONS
    print("Extracting JSONs...")
    json_dict = {key: [] for key in JSON_FIELDS}
    role_text = pages_to_text(pages, sections["role_profiles"])

    role_kpis = extract_role_kpis(ask, role_text)
    core_objectives = extract_core_objectives(ask, role_text)
    competency_dimensions = extract_competency_dimensions(ask, role_text)
    focus = extract_focus(ask, role_text)
    single_path_ri = extract_single_path_readiness_indicators(pages, SINGLE_PATH_PAGES)
    dual_path_ri = extract_dualpath_readiness_indicators(ask, pages_to_text(pages, DUAL_PATH_PAGES))
    all_ri = single_path_ri | dual_path_ri

    role_profile = combine_nested_role_profiles(
        kpi_nested=role_kpis,
        core_objectives_nested=core_objectives,
        competency_dims_nested=competency_dimensions,
        focus_nested=focus,
        readiness_nested=all_ri,
    )

    json_dict["role_profiles"] = lowercase_keys(role_profile)
    print("Role profiles extracted.")
    json_dict["annex1"] = extract_annex1(ask, pages_to_text(pages, sections["annex1"]))
    print("Annex 1 extracted.")
    json_dict["annex3"] = extract_annex3(ask, pages_to_text(pages, sections["annex3"]))
    print("Annex 3 extracted.")
    json_dict["annex4"] = extract_annex4(ask,  pages_to_text(pages, sections["annex4"]))
    print("Annex 4 extracted.")

    # Step 6 -- Export JSONs
    print("Exporting JSONs...")
    write_js_objects(json_dict)
    print("Done!")
    

if __name__ == "__main__":
    main()
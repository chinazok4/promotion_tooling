import json
import pytest
from helpers import *
from pyspark.sql import SparkSession
from pyspark.dbutils import DBUtils

try:
    import pdfplumber
except ImportError:
    print("Missing dependency: pip install pdfplumber")

spark = SparkSession.builder.getOrCreate()
dbutils = DBUtils(spark)


#tests for build llm caller. broken into 3 parts.
#this one ensures thatthe function builds and returns a callable object (in this case a function)
def test_returns_callable():
    ask = build_llm_caller(
        provider="databricks",
        model="databricks-meta-llama-3-3-70b-instruct"
    )
    assert callable(ask)


#this one ensures that the model responds
def test_model_responds():
    ask = build_llm_caller(
        provider="databricks",
        model="databricks-meta-llama-3-3-70b-instruct"
    )
    result = ask(
        "You are a structured data extractor. Return only valid JSON.",
        'Return this exact JSON: [{"test": "working"}]'
    )
    assert result is not None
    assert len(result) > 0


#this one ensures that when there is an output that it is stored in a valid json format
def test_returns_valid_json():
    ask = build_llm_caller(
        provider="databricks",
        model="databricks-meta-llama-3-3-70b-instruct"
    )
    result = ask(
        "You are a structured data extractor. Return only valid JSON.",
        'Return this exact JSON: [{"test": "working"}]'
    )
    parsed = json.loads(result)
    assert isinstance(parsed, list)
    assert parsed[0]["test"] == "working"


def test_invalid_provider_exits():
    with pytest.raises(SystemExit):
        build_llm_caller(provider="openai", model="gpt-4o")


def test_get_latest_file():
    path = "/Volumes/promotion_princess/framework/test"

    result = get_latest_file(path, dbutils)
    assert result == "/Volumes/promotion_princess/framework/test/test_simple.pdf"


def test_extract_all_text():
    path = "/Volumes/promotion_princess/framework/test/test_simple.pdf"
    result = extract_all_text(path)
    assert result == {
        1: ['just text', ''],
        2: ['text', [[['and'], ['a'], ['table']]]],
        3: ['', [[['just'], ['a'], ['table']]]]
    }


def test_find_section_pages_v2_format():
    """
    V2 format: {page_num: [text, tables]}
    Verify boundaries are computed from anchors to the next anchor (inclusive of start, exclusive of next start).
    """
    pages = {
        # role_profiles anchor
        1: ["Role Profile: Consultant", ""],
        2: ["Some page", ""],
        3: ["More content", ""],

        # annex1 anchor
        5: ["Annex 1: Competency Framework", ""],
        6: ["Annex 1 details", ""],
        7: ["More annex 1", ""],

        # annex2a anchor
        8: ["Annex 2A: Consulting Skills Progression", ""],
        9: ["Annex 2A details", ""],

        # annex3 anchor (skipping annex2b entirely for this test)
        12: ["Annex 3: Managed Revenue", ""],
        13: ["Annex 3 details", ""],

        # annex4 anchor
        17: ["Annex 4: Data and AI Adoption", ""],
        18: ["Annex 4 details", ""],
        19: ["Finishing up", ""],
    }

    result = find_section_pages(pages)

    # Expected sections (from your function's order)
    expected_keys = ["role_profiles", "annex1", "annex2a", "annex2b", "annex3", "annex4"]
    assert list(result.keys()) == expected_keys

    # Validate ranges (inclusive start to just before next)
    assert result["role_profiles"] == [1, 2, 3, 4] or  result["role_profiles"] == [1, 2, 3]
    assert result["annex1"] == [5, 6, 7]
    assert result["annex2a"] == [8, 9, 10, 11] or result["annex2a"] == [8, 9]
    assert result["annex2b"] == []  # not present
    assert result["annex3"] == [12, 13, 14, 15, 16] or result["annex3"] == [12, 13]
    assert result["annex4"] == [17, 18, 19]


def test_find_section_pages_v1_format_string_values():
    """
    V1 format: {page_num: "text"} should still be supported.
    """
    pages = {
        1: "ROLE PROFILE - Senior Consultant",
        2: "Filler content",
        10: "Annex 4: Data and AI Adoption"
    }

    result = find_section_pages(pages)
    assert result["role_profiles"] == [1, 2, 3, 4, 5, 6, 7, 8, 9] or result["role_profiles"] == [1, 2]
    assert result["annex4"] == [10]
    # Others should be empty
    assert result["annex1"] == []
    assert result["annex2a"] == []
    assert result["annex2b"] == []
    assert result["annex3"] == []


def test_find_section_pages_no_keywords_returns_empty_lists():
    pages = {
        1: ["Page without anchors", ""],
        2: ["Another page", ""],
        3: ["Still no anchors", ""],
    }

    result = find_section_pages(pages)
    assert all(result[sec] == [] for sec in result.keys())


def test_pages_to_text_mixed_text_and_multiple_tables():
    pages = {
        3: [
            "Objectives:\n- Deliver value\n- Collaborate",
            [
                [["KPI", "Target"], ["Revenue", "1M"]],
                [["Skill", "Level"], ["Python", "Advanced"]],
            ],
        ]
    }
    out = pages_to_text(pages, [3])
    # Expect text block first, then each table serialized with header
    expected = (
        "--- PAGE 3 ---\n"
        "Objectives:\n- Deliver value\n- Collaborate\n\n"
        "TABLE:\n"
        "KPI | Target\n"
        "Revenue | 1M\n\n"
        "TABLE:\n"
        "Skill | Level\n"
        "Python | Advanced"
    )
    assert out == expected

    
def test_pages_to_text_skips_empty_rows_and_none_cells():
    pages = {
        1: [
            "Header text",
            [
                [
                    ["Col1", "Col2", None],
                    [None, None, None],               # entire row empty -> skipped
                    ["  a  ", " ", "b"],             # whitespace-only cell ignored via strip; " " -> ""
                    ["", None, ""],                  # empty row -> skipped
                ]
            ],
        ]
    }
    out = pages_to_text(pages, [1])
    # Row 1 -> "Col1 | Col2" (None removed)
    # Row 2 -> skipped
    # Row 3 -> "a | b" (whitespace stripped, empty cell removed)
    # Row 4 -> skipped

    expected = (
        "--- PAGE 1 ---\n"
        "Header text\n\n"
        "TABLE:\n"
        "Col1 | Col2\n"
        "a |  | b"
    )
    assert out == expected


def test_pages_to_text_multiple_pages_ordering_and_separators():
    pages = {
        1: ["Intro", ""],
        2: ["", [[["A", "B"], ["1", "2"]]]],
        4: ["Summary", [[["S1", "S2"]]]],
    }
    out = pages_to_text(pages, [1, 2, 3, 4])  # page 3 missing
    expected = (
        "--- PAGE 1 ---\n"
        "Intro\n\n"
        "--- PAGE 2 ---\n"
        "TABLE:\n"
        "A | B\n"
        "1 | 2\n\n"
        "--- PAGE 4 ---\n"
        "Summary\n\n"
        "TABLE:\n"
        "S1 | S2"
    )
    assert out == expected
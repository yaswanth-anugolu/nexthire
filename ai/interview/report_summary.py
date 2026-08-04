import json

from ai.llm.client import ask_llm


def generate_report_summary(report):

    prompt = f"""
You are an expert Technical Hiring Manager.

Analyze this interview report.

{report}

Return ONLY valid JSON.

{{
    "strengths": [
        "...",
        "...",
        "..."
    ],
    "weaknesses": [
        "...",
        "...",
        "..."
    ],
    "overall_feedback": "..."
}}

Do not return markdown.
Return only JSON.
"""

    response = ask_llm(prompt)

    response = (
        response
        .replace("```json", "")
        .replace("```", "")
        .strip()
    )

    return json.loads(response)
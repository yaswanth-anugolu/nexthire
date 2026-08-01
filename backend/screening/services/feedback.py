from screening.services.llm import ask_llm


def generate_feedback(result: dict) -> dict:

    prompt = f"""
You are an expert ATS recruiter.

A candidate has already been scored by an ATS.

Do NOT calculate any score.

Use ONLY the information below.

ATS Result

Overall Score:
{result["overall_score"]}

Matched Skills:
{", ".join(result["matched_skills"])}

Missing Skills:
{", ".join(result["missing_skills"])}

Recommendation:
{result["recommendation"]}

Return ONLY valid JSON in this format:

{{
    "strengths": [
        "...",
        "..."
    ],

    "improvements": [
        "...",
        "..."
    ],

    "summary": "..."
}}
"""

    response = ask_llm(prompt)

    response = (
        response
        .replace("```json", "")
        .replace("```", "")
        .strip()
    )

    import json

    return json.loads(response)
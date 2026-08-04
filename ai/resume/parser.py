import json

from ai.llm.client import ask_llm


def parse_resume(resume_text: str):

    prompt = f"""
You are an AI Resume Parser.

Extract the following information from the resume.

Return ONLY valid JSON.

Schema:

{{
    "skills": [],
    "education": [],
    "experience": [],
    "projects": [],
    "certifications": []
}}

Resume:

{resume_text}
"""

    response = ask_llm(prompt)

    response = response.replace("```json", "")
    response = response.replace("```", "")

    return json.loads(response)
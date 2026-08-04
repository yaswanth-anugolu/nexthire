import json

from ai.llm.client import ask_llm


def evaluate_answer(question, candidate_answer, ideal_answer=""):

    prompt = f"""
You are an expert technical interviewer.

Evaluate the candidate's answer.

Question:
{question}

Ideal Answer:
{ideal_answer}

Candidate Answer:
{candidate_answer}

Return ONLY valid JSON.

{{
    "score": 8,
    "feedback": "Clear explanation with minor improvements needed.",
    "ideal_answer": "..."
}}

Rules:
- Score between 0 and 10.
- Feedback should be constructive.
- Ideal answer should be concise.
- Return only JSON.
"""

    response = ask_llm(prompt)

    response = (
        response
        .replace("```json", "")
        .replace("```", "")
        .strip()
    )

    return json.loads(response)
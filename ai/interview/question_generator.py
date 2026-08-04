import json

from screening.models import ScreeningResult
from resumes.models import Resume

from ai.llm.client import ask_llm


def generate_interview_questions(application):

    screening = ScreeningResult.objects.get(
        application=application
    )

    resume = Resume.objects.get(
        candidate=application.candidate
    )

    prompt = f"""
You are an expert Senior Technical Interviewer.

Generate a personalized interview based on:

Candidate Resume:
{resume.extracted_text}

ATS Score:
{screening.match_score}

Matched Skills:
{", ".join(screening.matched_skills)}

Missing Skills:
{", ".join(screening.missing_skills)}

Job Title:
{application.job.title}

Job Description:
{application.job.description}

Instructions:

1. Generate exactly:
   - 5 Aptitude questions
   - 5 Technical questions
   - 5 HR questions

2. Every question MUST include an ideal answer.

3. Technical questions MUST come from:
   - Resume
   - Projects
   - Skills
   - Job Description

4. HR questions should be personalized.

5. Aptitude questions should be logical reasoning or quantitative aptitude.

Return ONLY valid JSON.

{{
    "aptitude":[
        {{
            "question":"...",
            "ideal_answer":"..."
        }}
    ],
    "technical":[
        {{
            "question":"...",
            "ideal_answer":"..."
        }}
    ],
    "hr":[
        {{
            "question":"...",
            "ideal_answer":"..."
        }}
    ]
}}

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
import re

from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.metrics.pairwise import cosine_similarity

from .skills import TECHNICAL_SKILLS


def extract_skills(text):
    text = text.lower()

    found = set()

    for skill in TECHNICAL_SKILLS:
        pattern = r"\b" + re.escape(skill) + r"\b"

        if re.search(pattern, text):
            found.add(skill)

    return sorted(found)


def calculate_match_score(
    resume_text,
    job_description,
):
    documents = [
        resume_text,
        job_description,
    ]

    vectorizer = TfidfVectorizer(
        stop_words="english"
    )

    tfidf_matrix = vectorizer.fit_transform(
        documents
    )

    similarity = cosine_similarity(
        tfidf_matrix[0:1],
        tfidf_matrix[1:2],
    )[0][0]

    tfidf_score = similarity * 100

    resume_skills = set(
        extract_skills(resume_text)
    )

    job_skills = set(
        extract_skills(job_description)
    )

    matched_skills = sorted(
        resume_skills & job_skills
    )

    missing_skills = sorted(
        job_skills - resume_skills
    )

    if job_skills:
        skill_score = (
            len(matched_skills)
            / len(job_skills)
        ) * 100
    else:
        skill_score = 0

    final_score = (
        tfidf_score * 0.4
        + skill_score * 0.6
    )

    return {
        "score": round(final_score, 2),
        "matched_skills": matched_skills,
        "missing_skills": missing_skills,
    }
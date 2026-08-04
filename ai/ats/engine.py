import re

from ai_ml import (
    predict_candidate,
    extract_features,
)

from ai.resume.parser import (
    parse_resume,
)

from ai.ats.skills_dictionary import (
    KNOWN_SKILLS,
)


def extract_skills(text: str):

    text = text.lower()
    text = (
        text
        .replace("restful api", "rest api")
        .replace("restful apis", "rest api")
        .replace("rest apis", "rest api")
    )
    found = set()

    for skill in KNOWN_SKILLS:

        pattern = (
            r"\b"
            + re.escape(skill.lower())
            + r"\b"
        )

        if re.search(pattern, text):

            found.add(skill)

    return found


def calculate_match_score(
    resume_text,
    job_description,
):

    resume_skills = extract_skills(
        resume_text
    )

    job_skills = extract_skills(
        job_description
    )

    matched = sorted(
        resume_skills & job_skills
    )

    missing = sorted(
        job_skills - resume_skills
    )

    if len(job_skills) == 0:

        score = 0

    else:

        score = round(
            len(matched)
            /
            len(job_skills)
            *
            100,
            2,
        )

    parsed_resume = parse_resume(
        resume_text
    )

    features = extract_features(
        parsed_resume,
        score,
    )

    prediction = predict_candidate(
        features
    )

    return {

        "score": score,

        "matched_skills": matched,

        "missing_skills": missing,

        "ml_prediction": prediction[
            "prediction"
        ],

        "confidence": prediction[
            "confidence"
        ],
    }
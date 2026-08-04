from ai.ats.engine import calculate_match_score


def recommend_jobs(
    resume_text,
    jobs,
):

    recommendations = []

    for job in jobs:

        result = calculate_match_score(
            resume_text,
            job.description,
        )

        recommendations.append(
            {
                "job": job,
                "score": result["score"],
                "matched_skills": result["matched_skills"],
                "missing_skills": result["missing_skills"],
            }
        )

    recommendations.sort(
        key=lambda x: x["score"],
        reverse=True,
    )

    return recommendations
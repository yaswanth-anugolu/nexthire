from screening.models import ScreeningResult

from ai.llm.client import ask_llm


def compare_candidates(application_ids):

    results = (
        ScreeningResult.objects
        .select_related(
            "application",
            "application__candidate",
            "application__job",
        )
        .filter(
            application_id__in=application_ids
        )
    )

    if results.count() < 2:
        return {
            "comparison": (
                "At least two screened candidates are required."
            )
        }

    prompt = """
You are an expert AI Recruitment Assistant.

Compare the following candidates.

For each candidate mention:

- ATS Score
- ML Prediction
- Recommendation

Then provide:

Strengths
Weaknesses

Finally recommend the BEST candidate and explain WHY.

Candidates:

"""

    for result in results:

        prompt += f"""

Candidate:
Name: {result.application.candidate.name}

Email: {result.application.candidate.email}

Job:
{result.application.job.title}

ATS Score:
{result.match_score}

ML Prediction:
{result.ml_prediction}

ML Confidence:
{result.ml_confidence}

Recommendation:
{result.recommendation}

Matched Skills:
{", ".join(result.matched_skills)}

Missing Skills:
{", ".join(result.missing_skills)}

"""

    answer = ask_llm(prompt)

    return {
        "comparison": answer
    }
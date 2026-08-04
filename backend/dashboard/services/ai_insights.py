from ai.llm.client import ask_llm


def generate_hiring_insights(data):

    prompt = f"""
You are an expert AI Recruitment Analyst.

Analyze the following recruitment statistics and generate hiring insights.

Recruitment Statistics

Total Jobs:
{data["overview"]["total_jobs"]}

Active Jobs:
{data["overview"]["active_jobs"]}

Applications:
{data["overview"]["applications"]}

Screened Candidates:
{data["overview"]["screened_candidates"]}

Average ATS Score:
{data["overview"]["average_ats_score"]}

Highly Recommended:
{data["overview"]["highly_recommended"]}

Top Skills:
{data["top_skills"]}

Recommendation Breakdown:
{data["recommendation_breakdown"]}

Return your answer in this format:

Summary:

Strengths:

Concerns:

Recommendations:
"""

    return ask_llm(prompt)
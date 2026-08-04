from collections import Counter

from django.db.models import Count
from django.db.models.functions import TruncMonth

from applications.models import Application
from screening.models import ScreeningResult
from jobs.models import Job


def get_monthly_applications(company):

    data = (
        Application.objects.filter(
            job__company=company
        )
        .annotate(
            month=TruncMonth("applied_at")
        )
        .values("month")
        .annotate(
            applications=Count("id")
        )
        .order_by("month")
    )

    return [
        {
            "month": item["month"].strftime("%b"),
            "applications": item["applications"],
        }
        for item in data
    ]


def get_ats_distribution(company):

    results = ScreeningResult.objects.filter(
        application__job__company=company
    )

    distribution = {
        "80-100": 0,
        "60-79": 0,
        "40-59": 0,
        "0-39": 0,
    }

    for result in results:

        score = result.match_score

        if score >= 80:
            distribution["80-100"] += 1

        elif score >= 60:
            distribution["60-79"] += 1

        elif score >= 40:
            distribution["40-59"] += 1

        else:
            distribution["0-39"] += 1

    return [
        {
            "range": key,
            "count": value,
        }
        for key, value in distribution.items()
    ]


def get_recommendation_breakdown(company):

    results = (
        ScreeningResult.objects.filter(
            application__job__company=company
        )
        .values("recommendation")
        .annotate(
            count=Count("id")
        )
        .order_by("-count")
    )

    return [
        {
            "recommendation": item["recommendation"],
            "count": item["count"],
        }
        for item in results
    ]


def get_top_skills(company):

    jobs = Job.objects.filter(company=company)

    counter = Counter()

    for job in jobs:

        skills = [
            skill.strip()
            for skill in job.skills_required.split(",")
            if skill.strip()
        ]

        counter.update(skills)

    return [
        {
            "skill": skill,
            "count": count,
        }
        for skill, count in counter.most_common(10)
    ]
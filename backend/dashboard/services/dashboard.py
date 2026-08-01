from django.db.models import Avg

from jobs.models import Job
from applications.models import Application
from screening.models import ScreeningResult


def get_recruiter_dashboard(company):

    jobs = Job.objects.filter(company=company)

    total_jobs = jobs.count()

    active_jobs = jobs.filter(
        status=Job.JobStatus.OPEN
    ).count()

    applications = Application.objects.filter(
        job__company=company
    )

    total_applications = applications.count()

    screening_results = ScreeningResult.objects.filter(
        application__job__company=company
    )

    screened_candidates = screening_results.count()

    average_ats = screening_results.aggregate(
        Avg("match_score")
    )["match_score__avg"] or 0

    highly_recommended = screening_results.filter(
        recommendation="Highly Recommended"
    ).count()

    return {
        "total_jobs": total_jobs,
        "active_jobs": active_jobs,
        "applications": total_applications,
        "screened_candidates": screened_candidates,
        "average_ats_score": round(
            average_ats,
            2,
        ),
        "highly_recommended": highly_recommended,
    }
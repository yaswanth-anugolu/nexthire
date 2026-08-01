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
    ).select_related(
        "candidate",
        "job",
    )

    total_applications = applications.count()

    screening_results = (
        ScreeningResult.objects.filter(
            application__job__company=company
        )
        .select_related(
            "application",
            "application__candidate",
            "application__job",
        )
        .order_by("-match_score")
    )

    screened_candidates = screening_results.count()

    average_ats = (
        screening_results.aggregate(
            Avg("match_score")
        )["match_score__avg"]
        or 0
    )

    highly_recommended = screening_results.filter(
        recommendation="Highly Recommended"
    ).count()

    top_candidates = []

    for result in screening_results[:5]:

        top_candidates.append({
            "candidate": result.application.candidate.name,
            "email": result.application.candidate.email,
            "job": result.application.job.title,
            "score": result.match_score,
            "recommendation": result.recommendation,
        })

    recent_applications = []

    for application in applications.order_by("-applied_at")[:5]:

        recent_applications.append({
            "candidate": application.candidate.name,
            "job": application.job.title,
            "status": application.status,
            "applied_at": application.applied_at,
        })

    recent_jobs = []

    for job in jobs.order_by("-created_at")[:5]:

        recent_jobs.append({
            "title": job.title,
            "location": job.location,
            "employment_type": job.employment_type,
            "status": job.status,
            "deadline": job.deadline,
        })

    return {

        "overview": {

            "total_jobs": total_jobs,

            "active_jobs": active_jobs,

            "applications": total_applications,

            "screened_candidates": screened_candidates,

            "average_ats_score": round(
                average_ats,
                2,
            ),

            "highly_recommended": highly_recommended,
        },

        "top_candidates": top_candidates,

        "recent_applications": recent_applications,

        "recent_jobs": recent_jobs,
    }
from django.conf import settings
from django.db import models

from jobs.models import Job


class Application(models.Model):

    class Status(models.TextChoices):
        APPLIED = "APPLIED", "Applied"
        SCREENING = "SCREENING", "Screening"
        SHORTLISTED = "SHORTLISTED", "Shortlisted"
        INTERVIEW = "INTERVIEW", "Interview"
        HIRED = "HIRED", "Hired"
        REJECTED = "REJECTED", "Rejected"
        WITHDRAWN = "WITHDRAWN", "Withdrawn"

    candidate = models.ForeignKey(
        settings.AUTH_USER_MODEL,
        on_delete=models.CASCADE,
        related_name="applications",
    )

    job = models.ForeignKey(
        Job,
        on_delete=models.CASCADE,
        related_name="applications",
    )

    resume = models.FileField(
        upload_to="application_resumes/",
        blank=True,
        null=True,
    )

    cover_letter = models.TextField(
        blank=True,
    )

    status = models.CharField(
        max_length=20,
        choices=Status.choices,
        default=Status.APPLIED,
    )

    ai_score = models.DecimalField(
        max_digits=5,
        decimal_places=2,
        blank=True,
        null=True,
    )

    recruiter_notes = models.TextField(
        blank=True,
    )

    applied_at = models.DateTimeField(
        auto_now_add=True,
    )

    updated_at = models.DateTimeField(
        auto_now=True,
    )

    class Meta:
        constraints = [
            models.UniqueConstraint(
                fields=["candidate", "job"],
                name="unique_candidate_job",
            )
        ]

        ordering = ("-applied_at",)

    def __str__(self):
        return f"{self.candidate.username} → {self.job.title}"
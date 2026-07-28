from django.db import models

# Create your models here.
from django.conf import settings
from jobs.models import Job


class Application(models.Model):

    class Status(models.TextChoices):
        PENDING = "PENDING", "Pending"
        SCREENING = "SCREENING", "Screening"
        SHORTLISTED = "SHORTLISTED", "Shortlisted"
        INTERVIEW = "INTERVIEW", "Interview"
        REJECTED = "REJECTED", "Rejected"
        HIRED = "HIRED", "Hired"

    candidate = models.ForeignKey(
        settings.AUTH_USER_MODEL,
        on_delete=models.CASCADE,
        related_name="applications"
    )

    job = models.ForeignKey(
        Job,
        on_delete=models.CASCADE,
        related_name="applications"
    )

    cover_letter = models.TextField(blank=True)

    status = models.CharField(
        max_length=20,
        choices=Status.choices,
        default=Status.PENDING
    )

    applied_at = models.DateTimeField(auto_now_add=True)

    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        unique_together = ("candidate", "job")

    def __str__(self):
        return f"{self.candidate.email} - {self.job.title}"
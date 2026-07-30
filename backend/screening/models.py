from django.db import models

# Create your models here.

from accounts.models import User
from jobs.models import Job
from applications.models import Application


class ScreeningResult(models.Model):
    application = models.OneToOneField(
        Application,
        on_delete=models.CASCADE,
        related_name="screening",
    )

    match_score = models.FloatField()

    matched_skills = models.JSONField(default=list)

    missing_skills = models.JSONField(default=list)

    recommendation = models.CharField(
        max_length=50
    )

    screened_at = models.DateTimeField(
        auto_now_add=True
    )

    def __str__(self):
        return (
            f"{self.application.id} - "
            f"{self.match_score}%"
        )
from django.db import models

# Create your models here.
from django.conf import settings
from django.db import models


class Education(models.Model):

    class EducationLevel(models.TextChoices):
        SSC = "SSC", "SSC"
        INTERMEDIATE = "INTERMEDIATE", "Intermediate"
        DIPLOMA = "DIPLOMA", "Diploma"
        BACHELORS = "BACHELORS", "Bachelor's"
        MASTERS = "MASTERS", "Master's"
        PHD = "PHD", "PhD"

    candidate = models.ForeignKey(
        settings.AUTH_USER_MODEL,
        on_delete=models.CASCADE,
        related_name="educations",
    )

    education_level = models.CharField(
        max_length=20,
        choices=EducationLevel.choices,
    )

    institution_name = models.CharField(
        max_length=255,
    )

    degree = models.CharField(
        max_length=255,
        blank=True,
    )

    field_of_study = models.CharField(
        max_length=255,
        blank=True,
    )

    grade = models.CharField(
        max_length=50,
        blank=True,
    )

    start_date = models.DateField()

    end_date = models.DateField(
        null=True,
        blank=True,
    )

    currently_studying = models.BooleanField(
        default=False,
    )

    description = models.TextField(
        blank=True,
    )

    created_at = models.DateTimeField(
        auto_now_add=True,
    )

    updated_at = models.DateTimeField(
        auto_now=True,
    )

    class Meta:
        ordering = ("-end_date", "-start_date")

    def __str__(self):
        return f"{self.institution_name} - {self.education_level}"
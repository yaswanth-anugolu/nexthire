from django.db import models

# Create your models here.
from django.conf import settings


class Experience(models.Model):

    class EmploymentType(models.TextChoices):
        FULL_TIME = "FULL_TIME", "Full Time"
        PART_TIME = "PART_TIME", "Part Time"
        INTERNSHIP = "INTERNSHIP", "Internship"
        CONTRACT = "CONTRACT", "Contract"
        FREELANCE = "FREELANCE", "Freelance"

    candidate = models.ForeignKey(
        settings.AUTH_USER_MODEL,
        on_delete=models.CASCADE,
        related_name="experiences",
    )

    company_name = models.CharField(max_length=255)

    job_title = models.CharField(max_length=255)

    employment_type = models.CharField(
        max_length=20,
        choices=EmploymentType.choices,
    )

    location = models.CharField(max_length=255)

    currently_working = models.BooleanField(default=False)

    start_date = models.DateField()

    end_date = models.DateField(
        null=True,
        blank=True,
    )

    description = models.TextField(blank=True)

    skills_used = models.TextField(
        blank=True,
        help_text="Comma-separated skills",
    )

    created_at = models.DateTimeField(auto_now_add=True)

    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        ordering = ("-start_date",)

    def __str__(self):
        return f"{self.job_title} @ {self.company_name}"
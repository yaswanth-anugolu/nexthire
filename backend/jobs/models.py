from django.db import models

# Create your models here.
from django.conf import settings
from companies.models import Company


class Job(models.Model):

    class EmploymentType(models.TextChoices):
        FULL_TIME = "FULL_TIME", "Full Time"
        PART_TIME = "PART_TIME", "Part Time"
        INTERNSHIP = "INTERNSHIP", "Internship"
        CONTRACT = "CONTRACT", "Contract"

    class ExperienceLevel(models.TextChoices):
        FRESHER = "FRESHER", "Fresher"
        JUNIOR = "JUNIOR", "Junior"
        MID = "MID", "Mid Level"
        SENIOR = "SENIOR", "Senior"

    company = models.ForeignKey(
        Company,
        on_delete=models.CASCADE,
        related_name="jobs"
    )

    title = models.CharField(max_length=255)

    description = models.TextField()

    requirements = models.TextField()

    responsibilities = models.TextField()

    location = models.CharField(max_length=100)

    employment_type = models.CharField(
        max_length=20,
        choices=EmploymentType.choices
    )

    experience_level = models.CharField(
        max_length=20,
        choices=ExperienceLevel.choices
    )

    salary_min = models.PositiveIntegerField()

    salary_max = models.PositiveIntegerField()

    skills_required = models.TextField(
        help_text="Comma-separated skills"
    )

    deadline = models.DateField()

    is_active = models.BooleanField(default=True)

    created_at = models.DateTimeField(auto_now_add=True)

    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.title
from django.db import models
from django.utils.text import slugify
from django.core.exceptions import ValidationError
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

    class WorkplaceType(models.TextChoices):
        REMOTE = "REMOTE", "Remote"
        HYBRID = "HYBRID", "Hybrid"
        ONSITE = "ONSITE", "Onsite"

    class JobStatus(models.TextChoices):
        DRAFT = "DRAFT", "Draft"
        OPEN = "OPEN", "Open"
        CLOSED = "CLOSED", "Closed"

    company = models.ForeignKey(
        Company,
        on_delete=models.CASCADE,
        related_name="jobs",
    )

    title = models.CharField(max_length=255)

    slug = models.SlugField(
        unique=True,
        blank=True,
    )

    description = models.TextField()

    requirements = models.TextField()

    responsibilities = models.TextField()

    location = models.CharField(max_length=100)

    workplace_type = models.CharField(
        max_length=20,
        choices=WorkplaceType.choices,
        default=WorkplaceType.ONSITE,
    )

    employment_type = models.CharField(
        max_length=20,
        choices=EmploymentType.choices,
    )

    experience_level = models.CharField(
        max_length=20,
        choices=ExperienceLevel.choices,
    )

    salary_min = models.PositiveIntegerField()

    salary_max = models.PositiveIntegerField()

    skills_required = models.TextField(
        help_text="Comma-separated skills",
    )

    vacancies = models.PositiveIntegerField(
        default=1,
    )

    deadline = models.DateField()

    status = models.CharField(
        max_length=20,
        choices=JobStatus.choices,
        default=JobStatus.OPEN,
    )

    is_featured = models.BooleanField(
        default=False,
    )

    created_at = models.DateTimeField(
        auto_now_add=True,
    )

    updated_at = models.DateTimeField(
        auto_now=True,
    )

    def clean(self):
        if self.salary_min > self.salary_max:
            raise ValidationError(
                "Minimum salary cannot be greater than maximum salary."
            )

    def save(self, *args, **kwargs):
        if not self.slug:
            self.slug = slugify(self.title)
        super().save(*args, **kwargs)

    def __str__(self):
        return f"{self.title} - {self.company.name}"
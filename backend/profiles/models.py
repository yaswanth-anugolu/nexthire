from django.db import models

# Create your models here.
from django.conf import settings
from companies.models import Company

class CandidateProfile(models.Model):

    class ExperienceLevel(models.TextChoices):
        FRESHER = "FRESHER", "Fresher"
        JUNIOR = "JUNIOR", "Junior"
        MID = "MID", "Mid-Level"
        SENIOR = "SENIOR", "Senior"

    user = models.OneToOneField(
        settings.AUTH_USER_MODEL,
        on_delete=models.CASCADE,
        related_name="candidate_profile",
    )

    profile_picture = models.ImageField(
        upload_to="candidate_profiles/",
        blank=True,
        null=True,
    )

    headline = models.CharField(
        max_length=255,
        blank=True,
    )

    bio = models.TextField(
        blank=True,
    )

    date_of_birth = models.DateField(
        blank=True,
        null=True,
    )

    gender = models.CharField(
        max_length=20,
        blank=True,
    )

    current_location = models.CharField(
        max_length=255,
        blank=True,
    )

    preferred_location = models.CharField(
        max_length=255,
        blank=True,
    )

    experience_level = models.CharField(
        max_length=20,
        choices=ExperienceLevel.choices,
        default=ExperienceLevel.FRESHER,
    )

    current_job_title = models.CharField(
        max_length=255,
        blank=True,
    )

    current_company = models.CharField(
        max_length=255,
        blank=True,
    )

    expected_salary = models.DecimalField(
        max_digits=12,
        decimal_places=2,
        blank=True,
        null=True,
    )

    notice_period = models.CharField(
        max_length=100,
        blank=True,
    )

    portfolio_url = models.URLField(
        blank=True,
    )

    github_url = models.URLField(
        blank=True,
    )

    linkedin_url = models.URLField(
        blank=True,
    )

    leetcode_url = models.URLField(
        blank=True,
    )

    resume = models.FileField(
        upload_to="resumes/",
        blank=True,
        null=True,
    )

    profile_completed = models.BooleanField(
        default=False,
    )

    created_at = models.DateTimeField(
        auto_now_add=True,
    )

    updated_at = models.DateTimeField(
        auto_now=True,
    )

    def __str__(self):
        return self.user.username


class RecruiterProfile(models.Model):

    user = models.OneToOneField(
        settings.AUTH_USER_MODEL,
        on_delete=models.CASCADE,
        related_name="recruiter_profile",
    )
    company = models.ForeignKey(
            Company,
            on_delete=models.SET_NULL,
            null=True,
            blank=True,
            related_name="recruiters",
    )
    profile_picture = models.ImageField(
        upload_to="recruiter_profiles/",
        blank=True,
        null=True,
    )

    designation = models.CharField(
        max_length=255,
        blank=True,
    )

    official_email = models.EmailField(
        blank=True,
    )

    linkedin_url = models.URLField(
        blank=True,
    )

    profile_completed = models.BooleanField(
        default=False,
    )

    created_at = models.DateTimeField(
        auto_now_add=True,
    )

    updated_at = models.DateTimeField(
        auto_now=True,
    )
   
    def __str__(self):
        return self.user.username
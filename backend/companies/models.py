from django.db import models
from django.conf import settings


class Company(models.Model):
    class CompanySize(models.TextChoices):
        SMALL = "1-10", "1-10 Employees"
        MEDIUM = "11-50", "11-50 Employees"
        LARGE = "51-200", "51-200 Employees"
        ENTERPRISE = "201+", "201+ Employees"

    owner = models.ForeignKey(
        settings.AUTH_USER_MODEL,
        on_delete=models.CASCADE,
        related_name="companies"
    )

    name = models.CharField(max_length=255, unique=True)
    description = models.TextField()
    website = models.URLField(blank=True)
    industry = models.CharField(max_length=100)
    company_size = models.CharField(
        max_length=20,
        choices=CompanySize.choices,
        default=CompanySize.SMALL,
    )
    headquarters = models.CharField(max_length=100)
    logo = models.ImageField(
        upload_to="company_logos/",
        blank=True,
        null=True
    )

    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.name
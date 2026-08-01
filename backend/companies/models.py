from django.conf import settings
from django.db import models
from django.utils.text import slugify


class Company(models.Model):

    class CompanySize(models.TextChoices):
        SMALL = "1-10", "1-10 Employees"
        MEDIUM = "11-50", "11-50 Employees"
        LARGE = "51-200", "51-200 Employees"
        ENTERPRISE = "201+", "201+ Employees"

    owner = models.ForeignKey(
        settings.AUTH_USER_MODEL,
        on_delete=models.CASCADE,
        related_name="companies",
    )

    name = models.CharField(
        max_length=255,
        unique=True,
    )

    slug = models.SlugField(
        unique=True,
        blank=True,
    )

    description = models.TextField()

    website = models.URLField(
        blank=True,
    )

    industry = models.CharField(
        max_length=100,
    )

    company_size = models.CharField(
        max_length=20,
        choices=CompanySize.choices,
        default=CompanySize.SMALL,
    )

    headquarters = models.CharField(
        max_length=100,
    )

    logo = models.ImageField(
        upload_to="company_logos/",
        blank=True,
        null=True,
    )

    company_email = models.EmailField(
        blank=True,
    )

    company_phone = models.CharField(
        max_length=20,
        blank=True,
    )

    verified = models.BooleanField(
        default=False,
    )

    created_at = models.DateTimeField(
        auto_now_add=True,
    )

    updated_at = models.DateTimeField(
        auto_now=True,
    )

    def save(self, *args, **kwargs):
        if not self.slug:
            self.slug = slugify(self.name)
        super().save(*args, **kwargs)

    def __str__(self):
        return self.name
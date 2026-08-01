from django.db import models

# Create your models here.
from django.conf import settings


class Certification(models.Model):

    candidate = models.ForeignKey(
        settings.AUTH_USER_MODEL,
        on_delete=models.CASCADE,
        related_name="certifications",
    )

    name = models.CharField(max_length=255)

    issuing_organization = models.CharField(max_length=255)

    issue_date = models.DateField()

    expiry_date = models.DateField(
        null=True,
        blank=True,
    )

    credential_id = models.CharField(
        max_length=255,
        blank=True,
    )

    credential_url = models.URLField(
        blank=True,
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
        ordering = ("-issue_date",)

    def __str__(self):
        return self.name
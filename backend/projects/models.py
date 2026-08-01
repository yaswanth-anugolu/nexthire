from django.db import models

# Create your models here.
from django.conf import settings



class Project(models.Model):

    candidate = models.ForeignKey(
        settings.AUTH_USER_MODEL,
        on_delete=models.CASCADE,
        related_name="projects",
    )

    title = models.CharField(max_length=255)

    description = models.TextField()

    technologies = models.TextField(
        help_text="Comma-separated technologies",
    )

    github_url = models.URLField(
        blank=True,
    )

    live_url = models.URLField(
        blank=True,
    )

    start_date = models.DateField()

    end_date = models.DateField(
        null=True,
        blank=True,
    )

    currently_working = models.BooleanField(
        default=False,
    )

    created_at = models.DateTimeField(auto_now_add=True)

    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        ordering = ("-start_date",)

    def __str__(self):
        return self.title
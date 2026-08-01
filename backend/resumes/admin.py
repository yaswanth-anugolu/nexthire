from django.contrib import admin

# Register your models here.

from .models import Resume


@admin.register(Resume)
class ResumeAdmin(admin.ModelAdmin):

    list_display = (
        "candidate",
        "version",
        "ats_score",
        "parsing_status",
        "uploaded_at",
    )

    search_fields = (
        "candidate__username",
        "candidate__email",
    )

    list_filter = (
        "parsing_status",
        "is_primary",
    )
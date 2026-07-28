from django.contrib import admin

# Register your models here.
from .models import Job


@admin.register(Job)
class JobAdmin(admin.ModelAdmin):
    list_display = (
        "title",
        "company",
        "employment_type",
        "experience_level",
        "location",
        "is_active",
    )

    search_fields = ("title", "company__name")

    list_filter = (
        "employment_type",
        "experience_level",
        "is_active",
    )
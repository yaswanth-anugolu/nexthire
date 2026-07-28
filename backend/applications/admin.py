from django.contrib import admin

# Register your models here.
from .models import Application


@admin.register(Application)
class ApplicationAdmin(admin.ModelAdmin):
    list_display = (
        "candidate",
        "job",
        "status",
        "applied_at",
    )

    search_fields = (
        "candidate__email",
        "job__title",
    )

    list_filter = (
        "status",
        "applied_at",
    )
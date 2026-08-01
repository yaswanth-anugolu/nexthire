from django.contrib import admin

# Register your models here.

from .models import Certification


@admin.register(Certification)
class CertificationAdmin(admin.ModelAdmin):

    list_display = (
        "candidate",
        "name",
        "issuing_organization",
        "issue_date",
    )

    search_fields = (
        "candidate__username",
        "name",
        "issuing_organization",
    )

    list_filter = (
        "issue_date",
    )
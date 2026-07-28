from django.contrib import admin

# Register your models here.

from .models import Company


@admin.register(Company)
class CompanyAdmin(admin.ModelAdmin):
    list_display = (
        "id",
        "name",
        "owner",
        "industry",
        "company_size",
        "created_at",
    )

    search_fields = (
        "name",
        "industry",
    )

    list_filter = (
        "industry",
        "company_size",
    )
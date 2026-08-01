from django.contrib import admin

# Register your models here.


from .models import Experience


@admin.register(Experience)
class ExperienceAdmin(admin.ModelAdmin):

    list_display = (
        "candidate",
        "company_name",
        "job_title",
        "employment_type",
        "currently_working",
    )

    search_fields = (
        "candidate__username",
        "company_name",
        "job_title",
    )

    list_filter = (
        "employment_type",
        "currently_working",
    )
from django.contrib import admin

# Register your models here.

from .models import Skill


@admin.register(Skill)
class SkillAdmin(admin.ModelAdmin):

    list_display = (
        "candidate",
        "name",
        "proficiency",
        "years_of_experience",
    )

    search_fields = (
        "candidate__username",
        "name",
    )

    list_filter = (
        "proficiency",
    )
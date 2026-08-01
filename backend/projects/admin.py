from django.contrib import admin

# Register your models here.


from .models import Project


@admin.register(Project)
class ProjectAdmin(admin.ModelAdmin):

    list_display = (
        "candidate",
        "title",
        "currently_working",
    )

    search_fields = (
        "candidate__username",
        "title",
    )

    list_filter = (
        "currently_working",
    )
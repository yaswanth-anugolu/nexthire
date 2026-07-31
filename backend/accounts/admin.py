from django.contrib import admin
from django.contrib.auth.admin import UserAdmin

from .models import User


@admin.register(User)
class CustomUserAdmin(UserAdmin):

    list_display = (
        "id",
        "username",
        "name",
        "email",
        "role",
        "status",
        "is_staff",
        "is_active",
        "date_joined",
    )

    list_filter = (
        "role",
        "status",
        "is_staff",
        "is_active",
    )

    search_fields = (
        "username",
        "name",
        "email",
    )

    ordering = ("id",)

    fieldsets = (
        (None, {
            "fields": (
                "email",
                "password",
            )
        }),
        ("Personal Information", {
            "fields": (
                "username",
                "name",
                "phone_number",
                "bio",
                "profile_picture",
            )
        }),
        ("Role & Status", {
            "fields": (
                "role",
                "status",
            )
        }),
        ("Permissions", {
            "fields": (
                "is_active",
                "is_staff",
                "is_superuser",
                "groups",
                "user_permissions",
            )
        }),
        ("Important Dates", {
            "fields": (
                "last_login",
                "date_joined",
            )
        }),
    )

    add_fieldsets = (
        (None, {
            "classes": ("wide",),
            "fields": (
                "username",
                "name",
                "email",
                "phone_number",
                "role",
                "status",
                "password1",
                "password2",
                "is_staff",
                "is_active",
            ),
        }),
    )
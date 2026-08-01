from rest_framework import serializers

from companies.models import Company


class CompanySerializer(serializers.ModelSerializer):
    owner = serializers.ReadOnlyField(source="owner.username")

    class Meta:
        model = Company
        fields = [
            "id",
            "owner",
            "name",
            "slug",
            "description",
            "website",
            "industry",
            "company_size",
            "headquarters",
            "logo",
            "company_email",
            "company_phone",
            "verified",
            "created_at",
            "updated_at",
        ]

        read_only_fields = (
            "id",
            "owner",
            "slug",
            "verified",
            "created_at",
            "updated_at",
        )
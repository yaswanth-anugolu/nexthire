from rest_framework import serializers

from education.models import Education


class EducationSerializer(serializers.ModelSerializer):

    class Meta:
        model = Education
        fields = "__all__"

        read_only_fields = (
            "id",
            "candidate",
            "created_at",
            "updated_at",
        )
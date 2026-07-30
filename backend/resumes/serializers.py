from rest_framework import serializers
from .models import Resume


class ResumeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Resume
        fields = "__all__"
        read_only_fields = (
            "candidate",
            "extracted_text",
            "uploaded_at",
            "updated_at",
        )
        def validate_resume_file(self, value):
            allowed_extensions = [".pdf", ".docx"]

            extension = value.name.lower().rsplit(".", 1)

            if len(extension) < 2 or f".{extension[-1]}" not in allowed_extensions:
                raise serializers.ValidationError(
                    "Only PDF and DOCX files are allowed."
                )

            return value
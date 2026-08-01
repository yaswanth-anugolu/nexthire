from rest_framework import serializers

from resumes.models import Resume


class ResumeSerializer(serializers.ModelSerializer):

    class Meta:
        model = Resume
        fields = "__all__"

        read_only_fields = (
            "id",
            "candidate",
            "extracted_text",
            "version",
            "ats_score",
            "parsing_status",
            "uploaded_at",
            "updated_at",
        )

    def validate_resume_file(self, value):

        allowed_extensions = [".pdf", ".docx"]

        extension = value.name.lower().rsplit(".", 1)

        if len(extension) < 2:
            raise serializers.ValidationError(
                "Invalid file."
            )

        extension = f".{extension[-1]}"

        if extension not in allowed_extensions:
            raise serializers.ValidationError(
                "Only PDF and DOCX files are allowed."
            )

        return value
from rest_framework import serializers

from accounts.models import User


class ProfileSerializer(serializers.ModelSerializer):

    class Meta:
        model = User
        fields = (
            "id",
            "username",
            "name",
            "email",
            "phone_number",
            "role",
            "status",
            "bio",
            "profile_picture",
            "date_joined",
        )


class UpdateProfileSerializer(serializers.ModelSerializer):

    class Meta:
        model = User
        fields = (
            "name",
            "phone_number",
            "bio",
            "profile_picture",
        )
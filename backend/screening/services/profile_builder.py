from education.models import Education
from experience.models import Experience
from skills.models import Skill
from projects.models import Project
from certifications.models import Certification


def build_candidate_profile(user, parsed_data):
    """
    Save parsed resume data into database.
    """

    # ---------------- Skills ---------------- #

    Skill.objects.filter(candidate=user).delete()

    for skill in parsed_data.get("skills", []):
        Skill.objects.create(
            candidate=user,
            name=skill,
        )

    # ---------------- Education ---------------- #

    Education.objects.filter(candidate=user).delete()

    for edu in parsed_data.get("education", []):

        Education.objects.create(
            candidate=user,
            education_level="BACHELORS",
            institution_name=edu.get("institution", ""),
            degree=edu.get("degree", ""),
            grade=str(edu.get("gpa", "")),
            start_date="2022-01-01",
        )

    # Experience, Projects and Certifications
    # We'll add these in the next step.
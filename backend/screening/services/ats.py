from skills.models import Skill
from experience.models import Experience
from education.models import Education
from projects.models import Project
from certifications.models import Certification
from jobs.models import Job


# -----------------------------
# Skill Score (40)
# -----------------------------

def calculate_skill_score(candidate, job):

    candidate_skills = {
        skill.name.strip().lower()
        for skill in Skill.objects.filter(candidate=candidate)
    }

    required_skills = {
        skill.strip().lower()
        for skill in job.skills_required.split(",")
        if skill.strip()
    }

    matched = sorted(candidate_skills & required_skills)
    missing = sorted(required_skills - candidate_skills)

    if not required_skills:
        score = 0

    else:
        score = round(
            (len(matched) / len(required_skills)) * 40,
            2,
        )

    return {
        "score": score,
        "matched_skills": matched,
        "missing_skills": missing,
    }


# -----------------------------
# Experience Score (25)
# -----------------------------

def calculate_experience_score(candidate, job):

    total_experience = Experience.objects.filter(
        candidate=candidate
    ).count()

    level_score = {
        Job.ExperienceLevel.FRESHER: 0,
        Job.ExperienceLevel.JUNIOR: 1,
        Job.ExperienceLevel.MID: 2,
        Job.ExperienceLevel.SENIOR: 3,
    }

    required = level_score.get(
        job.experience_level,
        0,
    )

    if required == 0:
        return 25

    score = min(
        (total_experience / required) * 25,
        25,
    )

    return round(score, 2)


# -----------------------------
# Education Score (15)
# -----------------------------

def calculate_education_score(candidate):

    count = Education.objects.filter(
        candidate=candidate
    ).count()

    if count > 0:
        return 15

    return 0


# -----------------------------
# Project Score (10)
# -----------------------------

def calculate_project_score(candidate):

    count = Project.objects.filter(
        candidate=candidate
    ).count()

    if count >= 3:
        return 10

    elif count >= 1:
        return 5

    return 0


# -----------------------------
# Certification Score (10)
# -----------------------------

def calculate_certification_score(candidate):

    count = Certification.objects.filter(
        candidate=candidate
    ).count()

    if count >= 2:
        return 10

    elif count == 1:
        return 5

    return 0


# -----------------------------
# Final ATS Score
# -----------------------------

def calculate_match_score(candidate, job):

    skills = calculate_skill_score(candidate, job)

    experience = calculate_experience_score(
        candidate,
        job,
    )

    education = calculate_education_score(
        candidate,
    )

    projects = calculate_project_score(
        candidate,
    )

    certifications = calculate_certification_score(
        candidate,
    )

    total = round(
        skills["score"]
        + experience
        + education
        + projects
        + certifications,
        2,
    )

    if total >= 80:
        recommendation = "Highly Recommended"

    elif total >= 60:
        recommendation = "Recommended"

    else:
        recommendation = "Not Recommended"

    return {
        "overall_score": total,
        "skills_score": skills["score"],
        "experience_score": experience,
        "education_score": education,
        "project_score": projects,
        "certification_score": certifications,
        "matched_skills": skills["matched_skills"],
        "missing_skills": skills["missing_skills"],
        "recommendation": recommendation,
    }
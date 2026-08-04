def extract_features(parsed_resume, ats_score):

    skills = {
        skill.lower()
        for skill in parsed_resume.get(
            "skills",
            []
        )
    }

    experience = len(
        parsed_resume.get(
            "experience",
            []
        )
    )

    projects = len(
        parsed_resume.get(
            "projects",
            []
        )
    )

    certifications = len(
        parsed_resume.get(
            "certifications",
            []
        )
    )

    education = len(
        parsed_resume.get(
            "education",
            []
        )
    )

    return {
        "python": int("python" in skills),
        "django": int("django" in skills),
        "react": int("react" in skills),
        "rest_api": int(
            "rest api" in skills
            or "rest" in skills
        ),
        "mysql": int("mysql" in skills),
        "docker": int("docker" in skills),
        "aws": int("aws" in skills),
        "git": int("git" in skills),
        "javascript": int("javascript" in skills),
        "html": int("html" in skills),
        "css": int("css" in skills),
        "experience": experience,
        "projects": projects,
        "certifications": certifications,
        "education": education,
        "ats_score": ats_score,
    }
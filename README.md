# AI-Based Job Portal with Resume Screening

An AI-powered recruitment platform built using:

- Django
- Django REST Framework
- React.js
- MySQL
- Machine Learning
- Large Language Models (LLMs)

## Project Structure

- backend/ - Django Backend
- frontend/ - React Frontend
- ml/ - Machine Learning Models
- docs/ - Documentation
```
nexthire
├─ .postman
│  └─ resources.yaml
├─ ai
│  ├─ ats
│  │  ├─ classifier.py
│  │  ├─ engine.py
│  │  ├─ skills_dictionary.py
│  │  └─ __init__.py
│  ├─ career
│  │  ├─ career_assistance.py
│  │  ├─ recommendations.py
│  │  └─ __init__.py
│  ├─ comparison
│  │  ├─ candidate_comparison.py
│  │  ├─ ranking.py
│  │  └─ __init__.py
│  ├─ interview
│  │  ├─ answer_evaluator.py
│  │  ├─ aptitude.py
│  │  ├─ hr.py
│  │  ├─ question_generator.py
│  │  ├─ report_summary.py
│  │  ├─ technical.py
│  │  └─ __init__.py
│  ├─ llm
│  │  ├─ client.py
│  │  ├─ prompts.py
│  │  └─ __init__.py
│  ├─ recommendation
│  │  ├─ engine.py
│  │  ├─ ranker.py
│  │  ├─ scorer.py
│  │  └─ __init__.py
│  ├─ resume
│  │  ├─ parser.py
│  │  ├─ pdf_extractor.py
│  │  ├─ profile_builder.py
│  │  └─ __init__.py
│  ├─ utils
│  │  └─ __init__.py
│  └─ __init__.py
├─ backend
│  ├─ accounts
│  │  ├─ admin.py
│  │  ├─ apps.py
│  │  ├─ authentication.py
│  │  ├─ managers.py
│  │  ├─ migrations
│  │  │  ├─ 0001_initial.py
│  │  │  └─ __init__.py
│  │  ├─ models.py
│  │  ├─ permissions.py
│  │  ├─ serializers
│  │  │  ├─ login.py
│  │  │  ├─ password.py
│  │  │  ├─ profile.py
│  │  │  ├─ register.py
│  │  │  └─ __init__.py
│  │  ├─ serializers.py
│  │  ├─ tests.py
│  │  ├─ urls.py
│  │  ├─ views
│  │  │  ├─ login.py
│  │  │  ├─ password.py
│  │  │  ├─ profile.py
│  │  │  ├─ register.py
│  │  │  └─ __init__.py
│  │  ├─ views_old.py
│  │  └─ __init__.py
│  ├─ ai_ml
│  │  ├─ feature_extractor.py
│  │  ├─ predictor.py
│  │  └─ __init__.py
│  ├─ applications
│  │  ├─ admin.py
│  │  ├─ apps.py
│  │  ├─ migrations
│  │  │  ├─ 0001_initial.py
│  │  │  ├─ 0002_alter_application_options_and_more.py
│  │  │  └─ __init__.py
│  │  ├─ models.py
│  │  ├─ serializers
│  │  │  ├─ application.py
│  │  │  └─ __init__.py
│  │  ├─ tests.py
│  │  ├─ urls.py
│  │  ├─ views
│  │  │  ├─ application.py
│  │  │  └─ __init__.py
│  │  └─ __init__.py
│  ├─ career
│  │  ├─ admin.py
│  │  ├─ apps.py
│  │  ├─ migrations
│  │  │  └─ __init__.py
│  │  ├─ models.py
│  │  ├─ tests.py
│  │  ├─ urls.py
│  │  ├─ views.py
│  │  └─ __init__.py
│  ├─ certifications
│  │  ├─ admin.py
│  │  ├─ apps.py
│  │  ├─ migrations
│  │  │  ├─ 0001_initial.py
│  │  │  └─ __init__.py
│  │  ├─ models.py
│  │  ├─ serializers
│  │  │  ├─ certification.py
│  │  │  └─ __init__.py
│  │  ├─ tests.py
│  │  ├─ urls.py
│  │  ├─ views
│  │  │  ├─ certification.py
│  │  │  └─ __init__.py
│  │  └─ __init__.py
│  ├─ companies
│  │  ├─ admin.py
│  │  ├─ apps.py
│  │  ├─ migrations
│  │  │  ├─ 0001_initial.py
│  │  │  ├─ 0002_company_company_size_alter_company_name.py
│  │  │  ├─ 0003_alter_company_company_size.py
│  │  │  ├─ 0004_company_company_email_company_company_phone_and_more.py
│  │  │  └─ __init__.py
│  │  ├─ models.py
│  │  ├─ serializers
│  │  │  ├─ company.py
│  │  │  └─ __init__.py
│  │  ├─ tests.py
│  │  ├─ urls.py
│  │  ├─ views
│  │  │  ├─ company.py
│  │  │  └─ __init__.py
│  │  └─ __init__.py
│  ├─ config
│  │  ├─ asgi.py
│  │  ├─ settings.py
│  │  ├─ urls.py
│  │  ├─ wsgi.py
│  │  └─ __init__.py
│  ├─ dashboard
│  │  ├─ admin.py
│  │  ├─ apps.py
│  │  ├─ migrations
│  │  │  └─ __init__.py
│  │  ├─ models.py
│  │  ├─ serializers
│  │  │  ├─ recruiter_dashboard.py
│  │  │  └─ __init__.py
│  │  ├─ services
│  │  │  ├─ ai_insights.py
│  │  │  ├─ analytics.py
│  │  │  ├─ dashboard.py
│  │  │  └─ __init__.py
│  │  ├─ urls.py
│  │  ├─ views
│  │  │  ├─ recruiter_dashboard.py
│  │  │  └─ __init__.py
│  │  └─ __init__.py
│  ├─ education
│  │  ├─ admin.py
│  │  ├─ apps.py
│  │  ├─ migrations
│  │  │  ├─ 0001_initial.py
│  │  │  └─ __init__.py
│  │  ├─ models.py
│  │  ├─ serializers
│  │  │  ├─ education.py
│  │  │  └─ __init__.py
│  │  ├─ tests.py
│  │  ├─ urls.py
│  │  ├─ views
│  │  │  ├─ education.py
│  │  │  └─ __init__.py
│  │  └─ __init__.py
│  ├─ experience
│  │  ├─ admin.py
│  │  ├─ apps.py
│  │  ├─ migrations
│  │  │  ├─ 0001_initial.py
│  │  │  └─ __init__.py
│  │  ├─ models.py
│  │  ├─ serializers
│  │  │  ├─ experience.py
│  │  │  └─ __init__.py
│  │  ├─ tests.py
│  │  ├─ urls.py
│  │  ├─ views
│  │  │  ├─ experience.py
│  │  │  └─ __init__.py
│  │  └─ __init__.py
│  ├─ interviews
│  │  ├─ admin.py
│  │  ├─ apps.py
│  │  ├─ migrations
│  │  │  ├─ 0001_initial.py
│  │  │  └─ __init__.py
│  │  ├─ models.py
│  │  ├─ serializers.py
│  │  ├─ services
│  │  │  ├─ report.py
│  │  │  └─ __init__.py
│  │  ├─ tests.py
│  │  ├─ urls.py
│  │  ├─ views.py
│  │  └─ __init__.py
│  ├─ jobs
│  │  ├─ admin.py
│  │  ├─ apps.py
│  │  ├─ migrations
│  │  │  ├─ 0001_initial.py
│  │  │  ├─ 0002_remove_job_is_active_job_is_featured_job_slug_and_more.py
│  │  │  └─ __init__.py
│  │  ├─ models.py
│  │  ├─ serializers
│  │  │  ├─ job.py
│  │  │  └─ __init__.py
│  │  ├─ tests.py
│  │  ├─ urls.py
│  │  ├─ views
│  │  │  ├─ job.py
│  │  │  └─ __init__.py
│  │  └─ __init__.py
│  ├─ manage.py
│  ├─ profiles
│  │  ├─ admin.py
│  │  ├─ apps.py
│  │  ├─ migrations
│  │  │  ├─ 0001_initial.py
│  │  │  ├─ 0002_remove_recruiterprofile_company_description_and_more.py
│  │  │  └─ __init__.py
│  │  ├─ models.py
│  │  ├─ serializers
│  │  │  ├─ candidate.py
│  │  │  ├─ recruiter.py
│  │  │  └─ __init__.py
│  │  ├─ tests.py
│  │  ├─ urls.py
│  │  ├─ views
│  │  │  ├─ candidate.py
│  │  │  ├─ recruiter.py
│  │  │  └─ __init__.py
│  │  └─ __init__.py
│  ├─ projects
│  │  ├─ admin.py
│  │  ├─ apps.py
│  │  ├─ migrations
│  │  │  ├─ 0001_initial.py
│  │  │  └─ __init__.py
│  │  ├─ models.py
│  │  ├─ serializers
│  │  │  ├─ project.py
│  │  │  └─ __init__.py
│  │  ├─ tests.py
│  │  ├─ urls.py
│  │  ├─ views
│  │  │  ├─ project.py
│  │  │  └─ __init__.py
│  │  ├─ views.py
│  │  └─ __init__.py
│  ├─ recommendations
│  │  ├─ admin.py
│  │  ├─ apps.py
│  │  ├─ migrations
│  │  │  └─ __init__.py
│  │  ├─ models.py
│  │  ├─ serializers.py
│  │  ├─ tests.py
│  │  ├─ urls.py
│  │  ├─ views.py
│  │  └─ __init__.py
│  ├─ requirements.txt
│  ├─ resumes
│  │  ├─ admin.py
│  │  ├─ apps.py
│  │  ├─ migrations
│  │  │  ├─ 0001_initial.py
│  │  │  ├─ 0002_resume_ats_score_resume_is_primary_and_more.py
│  │  │  └─ __init__.py
│  │  ├─ models.py
│  │  ├─ parser.py
│  │  ├─ serializers
│  │  │  ├─ resume.py
│  │  │  └─ __init__.py
│  │  ├─ tests.py
│  │  ├─ urls.py
│  │  ├─ views
│  │  │  ├─ resume.py
│  │  │  └─ __init__.py
│  │  └─ __init__.py
│  ├─ screening
│  │  ├─ admin.py
│  │  ├─ apps.py
│  │  ├─ migrations
│  │  │  ├─ 0001_initial.py
│  │  │  ├─ 0002_screeningresult_ml_confidence_and_more.py
│  │  │  └─ __init__.py
│  │  ├─ models.py
│  │  ├─ serializers.py
│  │  ├─ services
│  │  │  ├─ career_assistant.py
│  │  │  ├─ classifier.py
│  │  │  ├─ interview.py
│  │  │  ├─ ranking.py
│  │  │  ├─ recommendations.py
│  │  │  └─ __init__.py
│  │  ├─ tests.py
│  │  ├─ test_llm.py
│  │  ├─ urls.py
│  │  ├─ views.py
│  │  └─ __init__.py
│  ├─ skills
│  │  ├─ admin.py
│  │  ├─ apps.py
│  │  ├─ migrations
│  │  │  ├─ 0001_initial.py
│  │  │  └─ __init__.py
│  │  ├─ models.py
│  │  ├─ serializers
│  │  │  ├─ skill.py
│  │  │  └─ __init__.py
│  │  ├─ tests.py
│  │  ├─ urls.py
│  │  ├─ views
│  │  │  ├─ skill.py
│  │  │  └─ __init__.py
│  │  └─ __init__.py
│  ├─ static
│  │  └─ README.md
│  ├─ templates
│  │  └─ README.md
│  └─ test_gemini.py
├─ docs
│  └─ README.md
├─ frontend
│  ├─ eslint.config.js
│  ├─ index.html
│  ├─ package-lock.json
│  ├─ package.json
│  ├─ public
│  │  ├─ favicon.svg
│  │  └─ icons.svg
│  ├─ README.md
│  ├─ src
│  │  ├─ api
│  │  │  └─ axios.js
│  │  ├─ App.css
│  │  ├─ App.jsx
│  │  ├─ assets
│  │  │  ├─ icons
│  │  │  └─ images
│  │  ├─ components
│  │  │  ├─ cards
│  │  │  ├─ common
│  │  │  ├─ dashboard
│  │  │  │  ├─ Navbar.jsx
│  │  │  │  ├─ RecentApplications.jsx
│  │  │  │  ├─ RecommendedJobs.jsx
│  │  │  │  ├─ ResumeProgress.jsx
│  │  │  │  ├─ Sidebar.jsx
│  │  │  │  ├─ StatCard.jsx
│  │  │  │  ├─ UpcomingInterviews.jsx
│  │  │  │  └─ WelcomeCard.jsx
│  │  │  ├─ forms
│  │  │  ├─ navbar
│  │  │  └─ sidebar
│  │  ├─ context
│  │  │  └─ authcontext.jsx
│  │  ├─ hooks
│  │  ├─ index.css
│  │  ├─ layouts
│  │  │  └─ DashboardLayout.jsx
│  │  ├─ main.jsx
│  │  ├─ pages
│  │  │  ├─ auth
│  │  │  │  ├─ login.jsx
│  │  │  │  └─ register.jsx
│  │  │  ├─ candidate
│  │  │  │  ├─ Applications.jsx
│  │  │  │  ├─ CandidateDashboard.jsx
│  │  │  │  ├─ CareerAssistant.jsx
│  │  │  │  ├─ Education.jsx
│  │  │  │  ├─ Jobs.jsx
│  │  │  │  ├─ Profile.jsx
│  │  │  │  ├─ Resume.jsx
│  │  │  │  └─ ResumeScore.jsx
│  │  │  ├─ career
│  │  │  ├─ interview
│  │  │  └─ recruiter
│  │  │     └─ recruiterdashboard.jsx
│  │  ├─ routes
│  │  │  └─ AppRouter.jsx
│  │  ├─ services
│  │  ├─ theme.js
│  │  └─ utils
│  └─ vite.config.js
├─ ml
│  ├─ data
│  │  ├─ candidate_dataset.csv
│  │  └─ generate_dataset.py
│  ├─ models
│  │  ├─ candidate_classifier.pkl
│  │  └─ label_encoder.pkl
│  ├─ README.md
│  ├─ services
│  └─ training
│     └─ train_model.py
├─ postman
│  ├─ collections
│  ├─ documents
│  ├─ environments
│  ├─ flows
│  ├─ globals
│  │  └─ workspace.globals.yaml
│  ├─ mocks
│  └─ specs
└─ README.md

```
```
nexthire
├─ .postman
│  └─ resources.yaml
├─ ai
│  ├─ ats
│  │  ├─ classifier.py
│  │  ├─ engine.py
│  │  ├─ skills_dictionary.py
│  │  └─ __init__.py
│  ├─ career
│  │  ├─ career_assistance.py
│  │  ├─ recommendations.py
│  │  └─ __init__.py
│  ├─ comparison
│  │  ├─ candidate_comparison.py
│  │  ├─ ranking.py
│  │  └─ __init__.py
│  ├─ interview
│  │  ├─ answer_evaluator.py
│  │  ├─ aptitude.py
│  │  ├─ hr.py
│  │  ├─ question_generator.py
│  │  ├─ report_summary.py
│  │  ├─ technical.py
│  │  └─ __init__.py
│  ├─ llm
│  │  ├─ client.py
│  │  ├─ prompts.py
│  │  └─ __init__.py
│  ├─ recommendation
│  │  ├─ engine.py
│  │  ├─ ranker.py
│  │  ├─ scorer.py
│  │  └─ __init__.py
│  ├─ resume
│  │  ├─ parser.py
│  │  ├─ pdf_extractor.py
│  │  ├─ profile_builder.py
│  │  └─ __init__.py
│  ├─ utils
│  │  └─ __init__.py
│  └─ __init__.py
├─ backend
│  ├─ accounts
│  │  ├─ admin.py
│  │  ├─ apps.py
│  │  ├─ authentication.py
│  │  ├─ managers.py
│  │  ├─ migrations
│  │  │  ├─ 0001_initial.py
│  │  │  └─ __init__.py
│  │  ├─ models.py
│  │  ├─ permissions.py
│  │  ├─ serializers
│  │  │  ├─ login.py
│  │  │  ├─ password.py
│  │  │  ├─ profile.py
│  │  │  ├─ register.py
│  │  │  └─ __init__.py
│  │  ├─ serializers.py
│  │  ├─ tests.py
│  │  ├─ urls.py
│  │  ├─ views
│  │  │  ├─ login.py
│  │  │  ├─ password.py
│  │  │  ├─ profile.py
│  │  │  ├─ register.py
│  │  │  └─ __init__.py
│  │  ├─ views_old.py
│  │  └─ __init__.py
│  ├─ ai_ml
│  │  ├─ feature_extractor.py
│  │  ├─ predictor.py
│  │  └─ __init__.py
│  ├─ applications
│  │  ├─ admin.py
│  │  ├─ apps.py
│  │  ├─ migrations
│  │  │  ├─ 0001_initial.py
│  │  │  ├─ 0002_alter_application_options_and_more.py
│  │  │  └─ __init__.py
│  │  ├─ models.py
│  │  ├─ serializers
│  │  │  ├─ application.py
│  │  │  └─ __init__.py
│  │  ├─ tests.py
│  │  ├─ urls.py
│  │  ├─ views
│  │  │  ├─ application.py
│  │  │  └─ __init__.py
│  │  └─ __init__.py
│  ├─ career
│  │  ├─ admin.py
│  │  ├─ apps.py
│  │  ├─ migrations
│  │  │  └─ __init__.py
│  │  ├─ models.py
│  │  ├─ tests.py
│  │  ├─ urls.py
│  │  ├─ views.py
│  │  └─ __init__.py
│  ├─ certifications
│  │  ├─ admin.py
│  │  ├─ apps.py
│  │  ├─ migrations
│  │  │  ├─ 0001_initial.py
│  │  │  └─ __init__.py
│  │  ├─ models.py
│  │  ├─ serializers
│  │  │  ├─ certification.py
│  │  │  └─ __init__.py
│  │  ├─ tests.py
│  │  ├─ urls.py
│  │  ├─ views
│  │  │  ├─ certification.py
│  │  │  └─ __init__.py
│  │  └─ __init__.py
│  ├─ companies
│  │  ├─ admin.py
│  │  ├─ apps.py
│  │  ├─ migrations
│  │  │  ├─ 0001_initial.py
│  │  │  ├─ 0002_company_company_size_alter_company_name.py
│  │  │  ├─ 0003_alter_company_company_size.py
│  │  │  ├─ 0004_company_company_email_company_company_phone_and_more.py
│  │  │  └─ __init__.py
│  │  ├─ models.py
│  │  ├─ serializers
│  │  │  ├─ company.py
│  │  │  └─ __init__.py
│  │  ├─ tests.py
│  │  ├─ urls.py
│  │  ├─ views
│  │  │  ├─ company.py
│  │  │  └─ __init__.py
│  │  └─ __init__.py
│  ├─ config
│  │  ├─ asgi.py
│  │  ├─ settings.py
│  │  ├─ urls.py
│  │  ├─ wsgi.py
│  │  └─ __init__.py
│  ├─ dashboard
│  │  ├─ admin.py
│  │  ├─ apps.py
│  │  ├─ migrations
│  │  │  └─ __init__.py
│  │  ├─ models.py
│  │  ├─ serializers
│  │  │  ├─ recruiter_dashboard.py
│  │  │  └─ __init__.py
│  │  ├─ services
│  │  │  ├─ ai_insights.py
│  │  │  ├─ analytics.py
│  │  │  ├─ dashboard.py
│  │  │  └─ __init__.py
│  │  ├─ urls.py
│  │  ├─ views
│  │  │  ├─ recruiter_dashboard.py
│  │  │  └─ __init__.py
│  │  └─ __init__.py
│  ├─ education
│  │  ├─ admin.py
│  │  ├─ apps.py
│  │  ├─ migrations
│  │  │  ├─ 0001_initial.py
│  │  │  └─ __init__.py
│  │  ├─ models.py
│  │  ├─ serializers
│  │  │  ├─ education.py
│  │  │  └─ __init__.py
│  │  ├─ tests.py
│  │  ├─ urls.py
│  │  ├─ views
│  │  │  ├─ education.py
│  │  │  └─ __init__.py
│  │  └─ __init__.py
│  ├─ experience
│  │  ├─ admin.py
│  │  ├─ apps.py
│  │  ├─ migrations
│  │  │  ├─ 0001_initial.py
│  │  │  └─ __init__.py
│  │  ├─ models.py
│  │  ├─ serializers
│  │  │  ├─ experience.py
│  │  │  └─ __init__.py
│  │  ├─ tests.py
│  │  ├─ urls.py
│  │  ├─ views
│  │  │  ├─ experience.py
│  │  │  └─ __init__.py
│  │  └─ __init__.py
│  ├─ interviews
│  │  ├─ admin.py
│  │  ├─ apps.py
│  │  ├─ migrations
│  │  │  ├─ 0001_initial.py
│  │  │  └─ __init__.py
│  │  ├─ models.py
│  │  ├─ serializers.py
│  │  ├─ services
│  │  │  ├─ report.py
│  │  │  └─ __init__.py
│  │  ├─ tests.py
│  │  ├─ urls.py
│  │  ├─ views.py
│  │  └─ __init__.py
│  ├─ jobs
│  │  ├─ admin.py
│  │  ├─ apps.py
│  │  ├─ migrations
│  │  │  ├─ 0001_initial.py
│  │  │  ├─ 0002_remove_job_is_active_job_is_featured_job_slug_and_more.py
│  │  │  └─ __init__.py
│  │  ├─ models.py
│  │  ├─ serializers
│  │  │  ├─ job.py
│  │  │  └─ __init__.py
│  │  ├─ tests.py
│  │  ├─ urls.py
│  │  ├─ views
│  │  │  ├─ job.py
│  │  │  └─ __init__.py
│  │  └─ __init__.py
│  ├─ manage.py
│  ├─ profiles
│  │  ├─ admin.py
│  │  ├─ apps.py
│  │  ├─ migrations
│  │  │  ├─ 0001_initial.py
│  │  │  ├─ 0002_remove_recruiterprofile_company_description_and_more.py
│  │  │  └─ __init__.py
│  │  ├─ models.py
│  │  ├─ serializers
│  │  │  ├─ candidate.py
│  │  │  ├─ recruiter.py
│  │  │  └─ __init__.py
│  │  ├─ tests.py
│  │  ├─ urls.py
│  │  ├─ views
│  │  │  ├─ candidate.py
│  │  │  ├─ recruiter.py
│  │  │  └─ __init__.py
│  │  └─ __init__.py
│  ├─ projects
│  │  ├─ admin.py
│  │  ├─ apps.py
│  │  ├─ migrations
│  │  │  ├─ 0001_initial.py
│  │  │  └─ __init__.py
│  │  ├─ models.py
│  │  ├─ serializers
│  │  │  ├─ project.py
│  │  │  └─ __init__.py
│  │  ├─ tests.py
│  │  ├─ urls.py
│  │  ├─ views
│  │  │  ├─ project.py
│  │  │  └─ __init__.py
│  │  ├─ views.py
│  │  └─ __init__.py
│  ├─ recommendations
│  │  ├─ admin.py
│  │  ├─ apps.py
│  │  ├─ migrations
│  │  │  └─ __init__.py
│  │  ├─ models.py
│  │  ├─ serializers.py
│  │  ├─ tests.py
│  │  ├─ urls.py
│  │  ├─ views.py
│  │  └─ __init__.py
│  ├─ requirements.txt
│  ├─ resumes
│  │  ├─ admin.py
│  │  ├─ apps.py
│  │  ├─ migrations
│  │  │  ├─ 0001_initial.py
│  │  │  ├─ 0002_resume_ats_score_resume_is_primary_and_more.py
│  │  │  └─ __init__.py
│  │  ├─ models.py
│  │  ├─ parser.py
│  │  ├─ serializers
│  │  │  ├─ resume.py
│  │  │  └─ __init__.py
│  │  ├─ tests.py
│  │  ├─ urls.py
│  │  ├─ views
│  │  │  ├─ resume.py
│  │  │  └─ __init__.py
│  │  └─ __init__.py
│  ├─ screening
│  │  ├─ admin.py
│  │  ├─ apps.py
│  │  ├─ migrations
│  │  │  ├─ 0001_initial.py
│  │  │  ├─ 0002_screeningresult_ml_confidence_and_more.py
│  │  │  └─ __init__.py
│  │  ├─ models.py
│  │  ├─ serializers.py
│  │  ├─ services
│  │  │  ├─ career_assistant.py
│  │  │  ├─ classifier.py
│  │  │  ├─ interview.py
│  │  │  ├─ ranking.py
│  │  │  ├─ recommendations.py
│  │  │  └─ __init__.py
│  │  ├─ tests.py
│  │  ├─ test_llm.py
│  │  ├─ urls.py
│  │  ├─ views.py
│  │  └─ __init__.py
│  ├─ skills
│  │  ├─ admin.py
│  │  ├─ apps.py
│  │  ├─ migrations
│  │  │  ├─ 0001_initial.py
│  │  │  └─ __init__.py
│  │  ├─ models.py
│  │  ├─ serializers
│  │  │  ├─ skill.py
│  │  │  └─ __init__.py
│  │  ├─ tests.py
│  │  ├─ urls.py
│  │  ├─ views
│  │  │  ├─ skill.py
│  │  │  └─ __init__.py
│  │  └─ __init__.py
│  ├─ static
│  │  └─ README.md
│  ├─ templates
│  │  └─ README.md
│  └─ test_gemini.py
├─ docs
│  └─ README.md
├─ frontend
│  ├─ eslint.config.js
│  ├─ index.html
│  ├─ package-lock.json
│  ├─ package.json
│  ├─ public
│  │  ├─ favicon.svg
│  │  └─ icons.svg
│  ├─ README.md
│  ├─ src
│  │  ├─ api
│  │  │  └─ axios.js
│  │  ├─ App.css
│  │  ├─ App.jsx
│  │  ├─ assets
│  │  │  ├─ icons
│  │  │  └─ images
│  │  ├─ components
│  │  │  ├─ cards
│  │  │  ├─ common
│  │  │  ├─ dashboard
│  │  │  │  ├─ Navbar.jsx
│  │  │  │  ├─ RecentApplications.jsx
│  │  │  │  ├─ RecommendedJobs.jsx
│  │  │  │  ├─ ResumeProgress.jsx
│  │  │  │  ├─ Sidebar.jsx
│  │  │  │  ├─ StatCard.jsx
│  │  │  │  ├─ UpcomingInterviews.jsx
│  │  │  │  └─ WelcomeCard.jsx
│  │  │  ├─ forms
│  │  │  ├─ navbar
│  │  │  └─ sidebar
│  │  ├─ context
│  │  │  └─ authcontext.jsx
│  │  ├─ hooks
│  │  ├─ index.css
│  │  ├─ layouts
│  │  │  └─ DashboardLayout.jsx
│  │  ├─ main.jsx
│  │  ├─ pages
│  │  │  ├─ auth
│  │  │  │  ├─ login.jsx
│  │  │  │  └─ register.jsx
│  │  │  ├─ candidate
│  │  │  │  ├─ Applications.jsx
│  │  │  │  ├─ CandidateDashboard.jsx
│  │  │  │  ├─ CareerAssistant.jsx
│  │  │  │  ├─ Education.jsx
│  │  │  │  ├─ Jobs.jsx
│  │  │  │  ├─ Profile.jsx
│  │  │  │  ├─ Resume.jsx
│  │  │  │  └─ ResumeScore.jsx
│  │  │  ├─ career
│  │  │  ├─ interview
│  │  │  └─ recruiter
│  │  │     └─ recruiterdashboard.jsx
│  │  ├─ routes
│  │  │  └─ AppRouter.jsx
│  │  ├─ services
│  │  ├─ theme.js
│  │  └─ utils
│  └─ vite.config.js
├─ ml
│  ├─ data
│  │  ├─ candidate_dataset.csv
│  │  └─ generate_dataset.py
│  ├─ models
│  │  ├─ candidate_classifier.pkl
│  │  └─ label_encoder.pkl
│  ├─ README.md
│  ├─ services
│  └─ training
│     └─ train_model.py
├─ postman
│  ├─ collections
│  ├─ documents
│  ├─ environments
│  ├─ flows
│  ├─ globals
│  │  └─ workspace.globals.yaml
│  ├─ mocks
│  └─ specs
└─ README.md

```
from django.contrib import admin

# Register your models here.


from .models import (
    InterviewSession,
    InterviewRound,
    InterviewQuestion,
    InterviewAnswer,
)


@admin.register(InterviewSession)
class InterviewSessionAdmin(admin.ModelAdmin):
    list_display = (
        "candidate",
        "job",
        "status",
        "overall_score",
        "started_at",
    )

    list_filter = (
        "status",
    )

    search_fields = (
        "candidate__username",
        "job__title",
    )


@admin.register(InterviewRound)
class InterviewRoundAdmin(admin.ModelAdmin):
    list_display = (
        "session",
        "round_type",
        "score",
    )


@admin.register(InterviewQuestion)
class InterviewQuestionAdmin(admin.ModelAdmin):
    list_display = (
        "round",
        "order",
        "marks",
    )


@admin.register(InterviewAnswer)
class InterviewAnswerAdmin(admin.ModelAdmin):
    list_display = (
        "question",
        "ai_score",
        "evaluated_at",
    )
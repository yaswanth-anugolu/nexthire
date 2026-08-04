from django.db import models

# Create your models here.
from django.conf import settings


from applications.models import Application
from jobs.models import Job


class InterviewSession(models.Model):

    class Status(models.TextChoices):
        PENDING = "PENDING", "Pending"
        IN_PROGRESS = "IN_PROGRESS", "In Progress"
        COMPLETED = "COMPLETED", "Completed"

    candidate = models.ForeignKey(
        settings.AUTH_USER_MODEL,
        on_delete=models.CASCADE,
        related_name="interview_sessions",
    )

    application = models.ForeignKey(
        Application,
        on_delete=models.CASCADE,
        related_name="interview_sessions",
    )

    job = models.ForeignKey(
        Job,
        on_delete=models.CASCADE,
        related_name="interview_sessions",
    )

    status = models.CharField(
        max_length=20,
        choices=Status.choices,
        default=Status.PENDING,
    )

    overall_score = models.DecimalField(
        max_digits=5,
        decimal_places=2,
        blank=True,
        null=True,
    )

    started_at = models.DateTimeField(
        auto_now_add=True,
    )

    completed_at = models.DateTimeField(
        blank=True,
        null=True,
    )

    class Meta:
        ordering = ("-started_at",)

    def __str__(self):
        return (
            f"{self.candidate.username} - "
            f"{self.job.title}"
        )


class InterviewRound(models.Model):

    class RoundType(models.TextChoices):
        APTITUDE = "APTITUDE", "Aptitude"
        TECHNICAL = "TECHNICAL", "Technical"
        HR = "HR", "HR"

    session = models.ForeignKey(
        InterviewSession,
        on_delete=models.CASCADE,
        related_name="rounds",
    )

    round_type = models.CharField(
        max_length=20,
        choices=RoundType.choices,
    )

    score = models.DecimalField(
        max_digits=5,
        decimal_places=2,
        blank=True,
        null=True,
    )

    class Meta:
        unique_together = (
            "session",
            "round_type",
        )

    def __str__(self):
        return (
            f"{self.session} - "
            f"{self.round_type}"
        )


class InterviewQuestion(models.Model):

    round = models.ForeignKey(
        InterviewRound,
        on_delete=models.CASCADE,
        related_name="questions",
    )

    question = models.TextField()

    ideal_answer = models.TextField(
        blank=True,
    )

    marks = models.PositiveIntegerField(
        default=10,
    )

    order = models.PositiveIntegerField()

    class Meta:
        ordering = ("order",)

    def __str__(self):
        return (
            f"Question {self.order}"
        )


class InterviewAnswer(models.Model):

    question = models.OneToOneField(
        InterviewQuestion,
        on_delete=models.CASCADE,
        related_name="answer",
    )

    answer = models.TextField()

    ai_score = models.DecimalField(
        max_digits=5,
        decimal_places=2,
        blank=True,
        null=True,
    )

    ai_feedback = models.TextField(
        blank=True,
    )

    evaluated_at = models.DateTimeField(
        auto_now=True,
    )

    def __str__(self):
        return (
            f"Answer - {self.question.id}"
        )
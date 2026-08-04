from interviews.models import (
    InterviewSession,
    InterviewAnswer,
)
from django.utils import timezone
from ai.interview.report_summary import generate_report_summary
def generate_interview_report(session: InterviewSession):

    total_questions = sum(
        interview_round.questions.count()
        for interview_round in session.rounds.all()
    )

    answered_questions = InterviewAnswer.objects.filter(
        question__round__session=session
    ).count()

    if answered_questions < total_questions:

        return {
            "completed": False,
            "message": "Interview is still in progress.",
            "answered": answered_questions,
            "total": total_questions,
        }

    rounds = []

    overall = 0
    total_rounds = 0

    for interview_round in session.rounds.all():

        answers = InterviewAnswer.objects.filter(
            question__round=interview_round
        )

        if answers.exists():

            score = (
                sum(
                    answer.ai_score or 0
                    for answer in answers
                )
                /
                answers.count()
            )

        else:

            score = 0

        interview_round.score = round(score, 2)
        interview_round.save(
            update_fields=["score"]
        )

        overall += score
        total_rounds += 1

        rounds.append({
            "round": interview_round.round_type,
            "score": round(score, 2),
        })

    overall_score = (
        round(overall / total_rounds, 2)
        if total_rounds
        else 0
    )

    session.overall_score = overall_score
    session.status = InterviewSession.Status.COMPLETED
    session.completed_at = timezone.now()

    session.save(
        update_fields=[
            "overall_score",
            "status",
            "completed_at",
        ]
    )

    if overall_score >= 9:
        recommendation = "Strongly Recommended"
    elif overall_score >= 7:
        recommendation = "Recommended"
    elif overall_score >= 5:
        recommendation = "Needs Improvement"
    else:
        recommendation = "Not Recommended"
    report = {
        "overall_score": overall_score,
        "recommendation": recommendation,
        "rounds": rounds,
    }

    summary = generate_report_summary(report)

    report["summary"] = summary
    return report
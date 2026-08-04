from ai.llm.client import ask_llm


def career_assistant(context, question):

    prompt = f"""
You are NextHire AI Career Assistant.

Candidate Context:

{context}

Candidate Question:

{question}

Answer professionally.

If the question is about:
- Resume -> use resume information
- ATS -> explain ATS score
- Jobs -> recommend suitable jobs
- Interview -> explain interview feedback
- Skills -> recommend learning roadmap

Give practical advice.
"""

    return ask_llm(prompt)
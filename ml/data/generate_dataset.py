import random
import pandas as pd
import numpy as np

random.seed(42)
np.random.seed(42)


def generate_candidate():

    python = random.randint(0, 1)
    django = random.randint(0, 1)
    react = random.randint(0, 1)
    rest_api = random.randint(0, 1)
    mysql = random.randint(0, 1)
    docker = random.randint(0, 1)
    aws = random.randint(0, 1)
    git = random.randint(0, 1)
    javascript = random.randint(0, 1)
    html = random.randint(0, 1)
    css = random.randint(0, 1)

    experience = random.randint(0, 8)
    projects = random.randint(0, 8)
    certifications = random.randint(0, 5)
    education = random.randint(0, 2)
    ats_score = random.randint(20, 100)

    score = 0

    score += python * 10
    score += django * 10
    score += react * 8
    score += rest_api * 8
    score += mysql * 6
    score += docker * 8
    score += aws * 8
    score += git * 4
    score += javascript * 5
    score += html * 3
    score += css * 3

    score += experience * 3
    score += projects * 2
    score += certifications * 2
    score += education * 4

    score += ats_score * 0.25

    noise = random.randint(-10, 10)
    score += noise

    if score >= 75:
        label = "Highly Suitable"

    elif score >= 58:
        label = "Suitable"

    elif score >= 42:
        label = "Needs Improvement"

    else:
        label = "Not Suitable"

    return [
        python,
        django,
        react,
        rest_api,
        mysql,
        docker,
        aws,
        git,
        javascript,
        html,
        css,
        experience,
        projects,
        certifications,
        education,
        ats_score,
        label,
    ]


rows = []

for _ in range(10000):
    rows.append(generate_candidate())

columns = [
    "python",
    "django",
    "react",
    "rest_api",
    "mysql",
    "docker",
    "aws",
    "git",
    "javascript",
    "html",
    "css",
    "experience",
    "projects",
    "certifications",
    "education",
    "ats_score",
    "label",
]

df = pd.DataFrame(rows, columns=columns)

df.to_csv(
    "candidate_dataset.csv",
    index=False,
)

print(df.head())
print()
print(df.shape)
print()
print(df["label"].value_counts())
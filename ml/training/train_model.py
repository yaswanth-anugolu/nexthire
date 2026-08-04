import os

import joblib
import pandas as pd

from sklearn.ensemble import RandomForestClassifier
from sklearn.metrics import (
    accuracy_score,
    classification_report,
    confusion_matrix,
)
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import LabelEncoder


BASE_DIR = os.path.dirname(os.path.dirname(__file__))

DATASET_PATH = os.path.join(
    BASE_DIR,
    "data",
    "candidate_dataset.csv",
)

MODELS_DIR = os.path.join(
    BASE_DIR,
    "models",
)

os.makedirs(
    MODELS_DIR,
    exist_ok=True,
)

df = pd.read_csv(DATASET_PATH)

X = df.drop(
    columns=["label"],
)

y = df["label"]

label_encoder = LabelEncoder()

y_encoded = label_encoder.fit_transform(y)

X_train, X_test, y_train, y_test = train_test_split(
    X,
    y_encoded,
    test_size=0.2,
    random_state=42,
    stratify=y_encoded,
)

model = RandomForestClassifier(
    n_estimators=200,
    random_state=42,
    class_weight="balanced",
)

model.fit(
    X_train,
    y_train,
)

predictions = model.predict(
    X_test,
)

print("\nAccuracy\n")

print(
    accuracy_score(
        y_test,
        predictions,
    )
)

print("\nConfusion Matrix\n")

print(
    confusion_matrix(
        y_test,
        predictions,
    )
)

print("\nClassification Report\n")

print(
    classification_report(
        y_test,
        predictions,
        target_names=label_encoder.classes_,
    )
)

joblib.dump(
    model,
    os.path.join(
        MODELS_DIR,
        "candidate_classifier.pkl",
    ),
)

joblib.dump(
    label_encoder,
    os.path.join(
        MODELS_DIR,
        "label_encoder.pkl",
    ),
)

print("\n✅ Model saved successfully.")

print(
    os.path.join(
        MODELS_DIR,
        "candidate_classifier.pkl",
    )
)
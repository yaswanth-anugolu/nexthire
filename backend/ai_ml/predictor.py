import os
import joblib
import pandas as pd


BASE_DIR = os.path.dirname(
    os.path.dirname(
        os.path.abspath(__file__)
    )
)

MODEL_PATH = os.path.join(
    BASE_DIR,
    "..",
    "ml",
    "models",
    "candidate_classifier.pkl",
)

LABEL_ENCODER_PATH = os.path.join(
    BASE_DIR,
    "..",
    "ml",
    "models",
    "label_encoder.pkl",
)


model = joblib.load(MODEL_PATH)

label_encoder = joblib.load(
    LABEL_ENCODER_PATH
)


def predict_candidate(features):

    df = pd.DataFrame(
        [features]
    )

    prediction = model.predict(df)[0]

    label = label_encoder.inverse_transform(
        [prediction]
    )[0]

    probability = max(
        model.predict_proba(df)[0]
    )

    return {
        "prediction": label,
        "confidence": float(round(probability * 100,2,)),
    }
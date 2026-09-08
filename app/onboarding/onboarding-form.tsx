"use client";

import { useSearchParams } from "next/navigation";
import { useState } from "react";
import Link from "next/link";

const questions = [
  {
    id: "origin",
    q: "Where are you currently living?",
    options: ["Nigeria", "Ghana", "India", "Pakistan", "Brazil", "Ukraine"],
  },
  {
    id: "destination",
    q: "Where are you planning to move?",
    options: ["United Kingdom", "United States", "Canada", "Australia", "Germany", "France"],
  },
  {
    id: "purpose",
    q: "Why are you moving?",
    options: ["Work", "Study", "Family", "Business", "Protection", "Other"],
  },
  {
    id: "movingAlone",
    q: "Are you moving alone?",
    options: ["Yes", "No"],
  },
];

export function OnboardingForm() {
  const params = useSearchParams();
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({
    origin: params.get("origin") || "Nigeria",
    destination: params.get("destination") || "United Kingdom",
    purpose: params.get("purpose") || "Work",
  });

  const current = questions[step];

  const choose = (value: string) => {
    setAnswers((previous) => ({ ...previous, [current.id]: value }));
    setStep((previous) => previous + 1);
  };

  if (step >= questions.length) {
    return (
      <main className="onboarding">
        <div className="onboarding-card">
          <div className="micro-label">JOURNEY CREATED</div>
          <h1 className="question">
            You’re ready to
            <br />
            <em>move.</em>
          </h1>
          <p className="hero-copy">
            {answers.origin} → {answers.destination} · {answers.purpose}
          </p>
          <Link className="pill dark large" href="/dashboard">
            OPEN MY JOURNEY →
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="onboarding">
      <div className="onboarding-card">
        <div className="progress-dots">
          {questions.map((question, index) => (
            <span
              key={question.id}
              className={`progress-dot ${index <= step ? "active" : ""}`}
            />
          ))}
        </div>
        <div className="micro-label">
          STEP {step + 1} / {questions.length}
        </div>
        <h1 className="question">{current.q}</h1>
        <div className="answer-grid">
          {current.options.map((option) => (
            <button
              className="answer"
              key={option}
              onClick={() => choose(option)}
              type="button"
            >
              {option}
            </button>
          ))}
        </div>
        <Link className="text-action" href="/">
          ← Back to home
        </Link>
      </div>
    </main>
  );
}

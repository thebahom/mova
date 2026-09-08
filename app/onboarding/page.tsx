import { Suspense } from "react";
import { OnboardingForm } from "./onboarding-form";

function OnboardingFallback() {
  return (
    <main className="onboarding">
      <div className="onboarding-card">
        <div className="micro-label">PREPARING YOUR JOURNEY</div>
        <h1 className="question">Let’s get you<br /><em>moving.</em></h1>
      </div>
    </main>
  );
}

export default function OnboardingPage() {
  return (
    <Suspense fallback={<OnboardingFallback />}>
      <OnboardingForm />
    </Suspense>
  );
}

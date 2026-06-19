import Link from "next/link";

export default function OnboardingPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">

      <div className="bg-white p-10 rounded-2xl shadow-xl text-center max-w-2xl">

        <h1 className="text-4xl font-bold mb-6">
          Welcome to CreatorVerse
        </h1>

        <p className="text-gray-600 mb-8">
          Let's set up your creator profile.
        </p>

        <Link
          href="/onboarding/upload"
          className="bg-violet-600 text-white px-8 py-3 rounded-xl"
        >
          Continue
        </Link>

      </div>

    </div>
  );
}
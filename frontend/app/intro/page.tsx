"use client";

import { useState } from "react";
import Link from "next/link";

export default function IntroPage() {
  const [step, setStep] = useState(1);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-8">
      <div className="bg-white p-10 rounded-2xl shadow-xl max-w-2xl w-full text-center">

        {step === 1 && (
          <>
            <h1 className="text-4xl font-bold mb-6">
              Discover Your Creator DNA
            </h1>

            <p className="text-gray-600">
              Understand your storytelling, humor,
              education, motivation and audience
              engagement style.
            </p>
          </>
        )}

        {step === 2 && (
          <>
            <h1 className="text-4xl font-bold mb-6">
              Build Your Creator Memory
            </h1>

            <p className="text-gray-600">
              Store every story, lesson, hook,
              joke, insight and content idea.
            </p>
          </>
        )}

        {step === 3 && (
          <>
            <h1 className="text-4xl font-bold mb-6">
              Chat With Your Content
            </h1>

            <p className="text-gray-600">
              Ask CreatorVerse questions about
              videos, podcasts, articles and audience.
            </p>
          </>
        )}

        <div className="mt-10 flex justify-center gap-4">

          <Link
            href="/signup"
            className="px-6 py-3 border rounded-xl"
          >
            Skip
          </Link>

          {step < 3 ? (
            <button
              onClick={() => setStep(step + 1)}
              className="bg-violet-600 text-white px-6 py-3 rounded-xl"
            >
              Next
            </button>
          ) : (
            <Link
              href="/signup"
              className="bg-violet-600 text-white px-6 py-3 rounded-xl"
            >
              Get Started
            </Link>
          )}

        </div>

        <div className="mt-10">
          <p className="text-gray-500">
            Powered by
          </p>

          <h3 className="font-bold">
            D S Group of Companies
          </h3>
        </div>

      </div>
    </div>
  );
}
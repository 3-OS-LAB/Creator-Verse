
"use client";

import { useState } from "react";

export default function AudienceInsightsPage() {
  const [insights, setInsights] = useState("");

  async function generateAudienceInsights() {
    const res = await fetch(
      "/api/generate/audience-insights",
      {
        method: "POST",
      }
    );

    const data = await res.json();

    setInsights(data.result);
  }

  return (
    <div className="min-h-screen p-8">

      <h1 className="text-4xl font-bold mb-8">
        Audience DNA
      </h1>

      <button
        onClick={generateAudienceInsights}
        className="bg-violet-600 text-white px-6 py-3 rounded-xl"
      >
        Analyze Audience
      </button>

      {insights && (
        <div className="mt-8 bg-white p-6 rounded-xl shadow">
          <pre className="whitespace-pre-wrap">
            {insights}
          </pre>
        </div>
      )}

    </div>
  );
}

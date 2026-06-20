
"use client";

import { useState } from "react";

export default function ContentStrategyPage() {
  const [strategy, setStrategy] = useState("");

  async function generateStrategy() {
    const res = await fetch(
      "/api/generate/content-strategy",
      {
        method: "POST",
      }
    );

    const text = await res.text();

console.log("CONTENT STRATEGY RESPONSE:", text);

setStrategy(text);
  }

  return (
    <div className="min-h-screen p-8">

      <h1 className="text-4xl font-bold mb-8">
        Content Strategy Planner
      </h1>

      <button
        onClick={generateStrategy}
        className="bg-violet-600 text-white px-6 py-3 rounded-xl"
      >
        Generate 30-Day Strategy
      </button>

      {strategy && (
        <div className="mt-8 bg-white p-6 rounded-xl shadow">
          <pre className="whitespace-pre-wrap">
            {strategy}
          </pre>
        </div>
      )}

    </div>
  );
}

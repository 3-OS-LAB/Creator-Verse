
"use client";

import { useState } from "react";

export default function ReelGeneratorPage() {
  const [topic, setTopic] = useState("");
  const [result, setResult] = useState("");

  async function generateReel() {
    try {
      const res = await fetch("/api/generate/reels", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          topic,
        }),
      });

      const data = await res.json();

setResult(data.result);
    } catch (error) {
      console.error(error);
      alert("Failed to generate reel");
    }
  }

  return (
    <div className="min-h-screen p-8">
      <h1 className="text-4xl font-bold mb-8">
        AI Reel Generator
      </h1>

      <input
        value={topic}
        onChange={(e) => setTopic(e.target.value)}
        placeholder="Enter Reel Topic"
        className="border p-3 rounded-xl w-full mb-4"
      />

      <button
        onClick={generateReel}
        className="bg-red-600 text-white px-6 py-3 rounded-xl"
      >
        Generate Reel
      </button>

      {result && (
        <div className="mt-8 bg-white p-6 rounded-xl shadow">
          <pre>{result}</pre>
        </div>
      )}
    </div>
  );
}

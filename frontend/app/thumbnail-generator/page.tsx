
"use client";

import { useState } from "react";

export default function ThumbnailGeneratorPage() {
  const [topic, setTopic] = useState("");
  const [result, setResult] = useState("");

  async function generateThumbnail() {
    const res = await fetch("/api/generate/thumbnail", {
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
  }

  return (
    <div className="min-h-screen p-8">

      <h1 className="text-4xl font-bold mb-8">
        AI Thumbnail Generator
      </h1>

      <input
        value={topic}
        onChange={(e) => setTopic(e.target.value)}
        placeholder="Enter Topic"
        className="border p-3 rounded-xl w-full mb-4"
      />

      <button
        onClick={generateThumbnail}
        className="bg-orange-600 text-white px-6 py-3 rounded-xl"
      >
        Generate Thumbnail
      </button>

      {result && (
        <div className="mt-8 bg-white p-6 rounded-xl shadow">
          <pre className="whitespace-pre-wrap">
            {result}
          </pre>
        </div>
      )}

    </div>
  );
}

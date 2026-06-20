
"use client";

import { useState } from "react";

export default function CreatorChatPage() {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");

  async function askQuestion() {
  try {
    const res = await fetch("/api/generate/chat", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        question,
      }),
    });

    console.log("STATUS:", res.status);

    const text = await res.text();

    console.log("RAW RESPONSE:", text);
    console.log("STATUS:", res.status);
console.log("TEXT:", text);
    const data = JSON.parse(text);

    setAnswer(data.answer);
  } catch (error: any) {
  console.error("FULL ERROR:", error);

  alert(error?.message || "Unknown Error");
}}

  return (
    <div className="min-h-screen p-8">

      <h1 className="text-4xl font-bold mb-8">
        Creator Chat
      </h1>

      <textarea
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
        placeholder="Ask anything..."
        className="w-full border p-4 rounded-xl h-32"
      />

      <button
        onClick={askQuestion}
        className="mt-4 bg-violet-600 text-white px-6 py-3 rounded-xl"
      >
        Ask AI
      </button>

      {answer && (
        <div className="mt-8 bg-white p-6 rounded-xl shadow">
          <h2 className="font-bold mb-3">
            AI Response
          </h2>

          <p className="whitespace-pre-wrap">
            {answer}
          </p>
        </div>
      )}

    </div>
  );
}

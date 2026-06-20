
"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabase";

export default function ContentStudioPage() {
  
  const [topic, setTopic] = useState("");
  const [hook, setHook] = useState("");
  const [title, setTitle] = useState("");
  const [script, setScript] = useState("");

  async function generateContent() {
    const res = await fetch("/api/generate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        topic,
      }),
    });

    const data = await res.json();

   setScript(data.result);
  }

  async function saveToMemory() {
    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (!user) {
      alert("Please login");
      return;
    }

    const { error } = await supabase
      .from("creator_memory")
      .insert({
  user_id: user.id,
  title: topic,
  content: script,
});

    if (error) {
      alert(error.message);
      console.log(error);
      return;
    }

    alert("Saved to Creator Memory");
  }

  return (
    <div className="min-h-screen p-8">

      <h1 className="text-4xl font-bold mb-8">
        Content Studio
      </h1>

      <input
        type="text"
        placeholder="Enter a topic"
        value={topic}
        onChange={(e) => setTopic(e.target.value)}
        className="border p-3 rounded-xl w-full mb-4"
      />

      <button
        onClick={generateContent}
        className="bg-violet-600 text-white px-6 py-3 rounded-xl"
      >
        Generate Content
      </button>

      
{script && (
  <div className="mt-8 grid gap-6">

    <div className="bg-white p-6 rounded-xl shadow">
      <h2 className="font-bold mb-4">
        AI Generated Content
      </h2>

      <p className="whitespace-pre-wrap">
        {script}
      </p>
    </div>

    <button
      onClick={saveToMemory}
      className="bg-green-600 text-white px-6 py-3 rounded-xl"
    >
      Save to Memory
    </button>

  </div>
)}


    </div>
  );
}
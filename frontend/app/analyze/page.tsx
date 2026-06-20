"use client";

import { supabase } from "@/lib/supabase";

export default function AnalyzePage() {

  async function runAnalysis() {
    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (!user) {
      alert("Please login");
      return;
    }

    const storytelling = Math.floor(Math.random() * 30) + 70;
const education = Math.floor(Math.random() * 30) + 70;
const humor = Math.floor(Math.random() * 30) + 70;
const motivation = Math.floor(Math.random() * 30) + 70;
const audience_engagement = Math.floor(Math.random() * 30) + 70;

console.log(
  storytelling,
  education,
  humor,
  motivation,
  audience_engagement
);

const { data, error } = await supabase
  .from("creator_analysis")
  .upsert(
    {
      id: user.id,
      storytelling,
      education,
      humor,
      motivation,
      audience_engagement,
    },
    {
      onConflict: "id",
    }
  )
  .select();

console.log("DATA:", data);
console.log("ERROR:", error);

    alert("Analysis Complete");
  }

  return (
    <div className="min-h-screen p-8">

      <h1 className="text-4xl font-bold mb-8">
        Creator DNA Analyzer
      </h1>

      <button
        onClick={runAnalysis}
        className="bg-red-600 text-white px-6 py-3 rounded-xl"
      >
        Run Analysis
      </button>

    </div>
  );
}
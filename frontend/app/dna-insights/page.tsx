
"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";

export default function DNAInsightsPage() {
    const [insights, setInsights] = useState("");
  const [dna, setDna] = useState<any>(null);

  useEffect(() => {
    loadDNA();
  }, []);

  async function loadDNA() {
    const { data } = await supabase
      .from("creator_analysis")
      .select("*")
      .single();

    setDna(data);
  }
  
async function generateInsights() {
  const res = await fetch("/api/generate/dna-insights", {
    method: "POST",
  });

  const data = await res.json();

  setInsights(data.result);
}


  if (!dna) {
    return <div className="p-8">Loading...</div>;
  }

  return (
    <div className="min-h-screen p-8">
      <h1 className="text-4xl font-bold mb-8">
        Creator DNA Insights
      </h1>

      <div className="grid md:grid-cols-2 gap-6">

        <div className="bg-white p-6 rounded-xl shadow">
          <h2 className="font-bold">Storytelling</h2>
          <p>{dna.storytelling}%</p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow">
          <h2 className="font-bold">Education</h2>
          <p>{dna.education}%</p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow">
          <h2 className="font-bold">Humor</h2>
          <p>{dna.humor}%</p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow">
          <h2 className="font-bold">Motivation</h2>
          <p>{dna.motivation}%</p>
        </div>
      
    
      </div>

      <button
        onClick={generateInsights}
        className="mt-8 bg-violet-600 text-white px-6 py-3 rounded-xl"
      >
        Generate AI Growth Plan
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

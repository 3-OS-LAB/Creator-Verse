"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase";
export default function DashboardPage() {
  const [dna, setDna] = useState<any>(null);
  const router = useRouter();

useEffect(() => {
  loadData();
}, []);

async function loadData() {
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    router.push("/login");
    return;
  }

  const { data, error } = await supabase
  .from("creator_analysis")
  .select("*")
  .eq("id", user.id)
  .single();

console.log("USER ID:", user.id);
console.log("DATA:", data);
console.log("ERROR:", error);

  setDna(data);
}

  return (
    <main className="min-h-screen bg-gray-100 p-8">

      <h1 className="text-4xl font-bold mb-8">
        CreatorVerse Dashboard
      </h1>
      

      {/* Score Cards */}
{/*<div className="grid md:grid-cols-3 gap-6">

  Creator DNA Score Card
  Audience Match Card
  Storytelling Score Card
  Education Score Card
  Humor Score Card
  Growth Potential Card

</div>
  {/* Creator DNA Breakdown */}
<div className="mt-6 bg-white p-6 rounded-xl shadow">

  <h2 className="text-2xl font-bold mb-6">
    Creator DNA Breakdown
  </h2>

  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">

    <div className="bg-violet-50 p-4 rounded-xl">
      <h3 className="text-gray-600">
        Storytelling
      </h3>

      <p className="text-3xl font-bold text-violet-600 mt-2">
        {dna?.storytelling || 0}%
      </p>
    </div>

    <div className="bg-green-50 p-4 rounded-xl">
      <h3 className="text-gray-600">
        Education
      </h3>

      <p className="text-3xl font-bold text-green-600 mt-2">
        {dna?.education || 0}%
      </p>
    </div>

    <div className="bg-yellow-50 p-4 rounded-xl">
      <h3 className="text-gray-600">
        Humor
      </h3>

      <p className="text-3xl font-bold text-yellow-600 mt-2">
        {dna?.humor || 0}%
      </p>
    </div>

    <div className="bg-blue-50 p-4 rounded-xl">
      <h3 className="text-gray-600">
        Motivation
      </h3>

      <p className="text-3xl font-bold text-blue-600 mt-2">
        {dna?.motivation || 0}%
      </p>
    </div>

    <div className="bg-orange-50 p-4 rounded-xl">
      <h3 className="text-gray-600">
        Audience Engagement
      </h3>

      <p className="text-3xl font-bold text-orange-600 mt-2">
        {dna?.audience_engagement || 0}%
      </p>
    </div>

    <div className="bg-pink-50 p-4 rounded-xl">
      <h3 className="text-gray-600">
        Creator DNA Score
      </h3>

      <p className="text-3xl font-bold text-pink-600 mt-2">
        {dna
          ? Math.round(
              (
                dna.storytelling +
                dna.education +
                dna.humor +
                dna.motivation +
                dna.audience_engagement
              ) / 5
            )
          : 0}
        %
      </p>
    </div>

  </div>

</div>


      {/* Top Creator Strengths */}
      <div className="mt-10 bg-white p-6 rounded-xl shadow">
        <h2 className="text-2xl font-bold mb-4">
          Top Creator Strengths
        </h2>

        <ul className="space-y-2">
          <li>✓ Storytelling</li>
          <li>✓ Educational Content</li>
          <li>✓ Audience Trust</li>
        </ul>
      </div>

      {/* Growth Opportunities */}
      <div className="mt-6 bg-white p-6 rounded-xl shadow">
        <h2 className="text-2xl font-bold mb-4">
          Growth Opportunities
        </h2>

        <ul className="space-y-2">
          <li>Improve Humor Usage</li>
          <li>Shorter Video Introductions</li>
          <li>More Personal Stories</li>
        </ul>
      </div>

      

      {/* Quick Actions */}
      <div className="mt-6 bg-white p-6 rounded-xl shadow">
        <h2 className="text-2xl font-bold mb-4">
          Quick Actions
        </h2>
        
        <div className="flex flex-wrap gap-4">

          <a
            href="/upload"
            className="bg-violet-600 text-white px-6 py-3 rounded-xl"
          >
            Upload Content
          </a>
          <a href="/analyze" className="bg-red-600 text-white px-6 py-3 rounded-xl"> Analyze Content
          </a>
          <a
            href="/creator-chat"
            className="bg-green-600 text-white px-6 py-3 rounded-xl"
          >
            Ask Creator Chat
          </a>

          <a
            href="/creator-memory"
            className="bg-blue-600 text-white px-6 py-3 rounded-xl"
          >
            View Memory
          </a>

        </div>
      </div>

      {/* Navigation Buttons */}
      <div className="mt-8 flex gap-4 flex-wrap">

        <a
          href="/creator-memory"
          className="bg-blue-600 text-white px-6 py-3 rounded-xl"
        >
          Creator Memory
        </a>

        <a
          href="/creator-chat"
          className="bg-violet-600 text-white px-6 py-3 rounded-xl"
        >
          Creator Chat
        </a>

        <a
          href="/audience-dna"
          className="bg-green-600 text-white px-6 py-3 rounded-xl"
        >
          Audience DNA
        </a>

        <a
          href="/analytics"
          className="bg-orange-600 text-white px-6 py-3 rounded-xl"
        >
          Analytics
        </a>
        <a href="/reel-generator" className="bg-red-600 text-white px-6 py-3 rounded-xl"> AI Reel Generator
        </a>

      </div>

    </main>
  );
}
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

  const { data } = await supabase
    .from("creator_dna")
    .select("*")
    .eq("id", user.id)
    .single();

  setDna(data);
}

  return (
    <main className="min-h-screen bg-gray-100 p-8">

      <h1 className="text-4xl font-bold mb-8">
        CreatorVerse Dashboard
      </h1>

      {/* Score Cards */}
      <div className="grid md:grid-cols-3 gap-6">

        <a href="/audience-dna">
          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg cursor-pointer">
            <h2 className="font-semibold">Creator DNA Score</h2>
            <p className="text-3xl mt-3"> {dna? Math.round((
                                                             dna.storytelling +
                                                             dna.education +
                                                             dna.humor +
                                                             dna.motivation +
                                                             dna.audience_engagement) / 5) : 0} % 
            </p>
          </div>
        </a>

        <a href="/analytics">
          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg cursor-pointer">
            <h2 className="font-semibold">Audience Match</h2>
            <p className="text-3xl mt-3"> {dna?.audience_engagement || 0}% </p>
          </div>
        </a>

        <a href="/creator-memory">
          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg cursor-pointer">
            <h2 className="font-semibold">Storytelling Score</h2>
            <p className="text-3xl mt-3"> {dna?.storytelling || 0}% </p>
          </div>
        </a>

        <a href="/creator-memory">
          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg cursor-pointer">
            <h2 className="font-semibold">Education Score</h2>
            <p className="text-3xl mt-3"> {dna?.education || 0}% </p>
          </div>
        </a>

        <a href="/analytics">
          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg cursor-pointer">
            <h2 className="font-semibold">Humor Score</h2>
            <p className="text-3xl mt-3"> {dna?.humor || 0}% </p>
          </div>
        </a>

        <a href="/analytics">
          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg cursor-pointer">
            <h2 className="font-semibold">Growth Potential</h2>
            <p className="text-3xl mt-3"> {dna?.motivation || 0}% </p>
          </div>
        </a>

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

      {/* Creator DNA Breakdown */}
      <div className="mt-6 bg-white p-6 rounded-xl shadow">
        <h2 className="text-2xl font-bold mb-4">
          Creator DNA Breakdown
        </h2>

        <p>Storytelling — 92%</p>
        <p>Education — 95%</p>
        <p>Humor — 74%</p>
        <p>Motivation — 89%</p>
        <p>Audience Engagement — 88%</p>
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

      </div>

    </main>
  );
}
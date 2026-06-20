"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabase";

export default function AudienceDNAPage() {
  const [ageGroup, setAgeGroup] = useState("");
  const [interests, setInterests] = useState("");
  const [contentType, setContentType] = useState("");

  async function saveAudienceDNA() {
    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (!user) return;

    await supabase
      .from("audience_dna")
      .upsert({
        user_id: user.id,
        age_group: ageGroup,
        interests: interests,
        content_type: contentType,
        engagement_level: "Medium",
      });

    alert("Audience DNA Saved");
  }

  return (
    <div className="p-8">
      <h1 className="text-4xl font-bold mb-6">
        Audience DNA
      </h1>

      <input
        placeholder="Age Group"
        className="border p-3 w-full mb-4 rounded-xl"
        value={ageGroup}
        onChange={(e) => setAgeGroup(e.target.value)}
      />

      <input
        placeholder="Interests"
        className="border p-3 w-full mb-4 rounded-xl"
        value={interests}
        onChange={(e) => setInterests(e.target.value)}
      />

      <input
        placeholder="Content Type"
        className="border p-3 w-full mb-4 rounded-xl"
        value={contentType}
        onChange={(e) => setContentType(e.target.value)}
      />

      <button
        onClick={saveAudienceDNA}
        className="bg-violet-600 text-white px-6 py-3 rounded-xl"
      >
        Save Audience DNA
      </button>
    </div>
  );
}
"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabase";

export default function ProfilePage() {
  const [creatorType, setCreatorType] = useState("");

  const saveProfile = async () => {
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    alert("Please login first");
    return;
  }

  const { error } = await supabase
    .from("profiles")
    .upsert({
      id: user.id,
      email: user.email,
      creator_type: creatorType,
    });

  if (error) {
    alert(error.message);
    return;
  }

  const dnaResult = await supabase
  .from("creator_dna")
  .upsert({
    id: user.id,
    storytelling: 92,
    education: 95,
    humor: 74,
    motivation: 89,
    audience_engagement: 88,
  });

console.log(dnaResult);

if (dnaResult.error) {
  alert(dnaResult.error.message);
  return;
}

alert("Profile & DNA saved successfully!");
};

  return (
    <div className="min-h-screen p-8">

      <h1 className="text-4xl font-bold mb-8">
        Creator Profile
      </h1>

      <div className="bg-white p-6 rounded-xl shadow max-w-xl">

        <h2 className="text-2xl font-bold mb-4">
          Creator Type
        </h2>

        <select
          className="border p-3 rounded-xl w-full"
          value={creatorType}
          onChange={(e) => setCreatorType(e.target.value)}
        >
          <option value="">Select Creator Type</option>
          <option>Content Creator</option>
          <option>Educator</option>
          <option>Influencer</option>
          <option>Story Teller</option>
          <option>Podcaster</option>
          <option>Standup Comedian</option>
        </select>

        <button
          onClick={saveProfile}
          className="mt-6 bg-violet-600 text-white px-6 py-3 rounded-xl"
        >
          Save Profile
        </button>

      </div>

    </div>
  );
}
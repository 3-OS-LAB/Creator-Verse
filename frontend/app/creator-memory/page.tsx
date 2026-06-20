
"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";

export default function CreatorMemoryPage() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [memories, setMemories] = useState<any[]>([]);

  useEffect(() => {
    loadMemories();
  }, []);

  async function loadMemories() {
    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (!user) return;

    const { data } = await supabase
      .from("creator_memory")
      .select("*")
      .eq("user_id", user.id)
      .order("created_at", { ascending: false });

    setMemories(data || []);
  }

  async function saveMemory() {
    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (!user) return;

    await supabase
      .from("creator_memory")
      .insert({
        user_id: user.id,
        title,
        content,
      });

    setTitle("");
    setContent("");

    loadMemories();

    alert("Memory Saved");
  }

  return (
    <div className="p-8">

      <h1 className="text-4xl font-bold mb-6">
        Creator Memory
      </h1>

      <input
        placeholder="Title"
        className="border p-3 w-full mb-4 rounded-xl"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <textarea
        placeholder="Content"
        className="border p-3 w-full mb-4 rounded-xl h-40"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />

      <button
        onClick={saveMemory}
        className="bg-violet-600 text-white px-6 py-3 rounded-xl"
      >
        Save Memory
      </button>

      <div className="mt-10">
        <h2 className="text-2xl font-bold mb-4">
          Saved Memories
        </h2>

        {memories.map((memory) => (
          <div
            key={memory.id}
            className="bg-white p-4 rounded-xl shadow mb-4"
          >
            <h3 className="font-bold text-lg">
              {memory.title}
            </h3>

            <p className="mt-2 text-gray-700">
              {memory.content}
            </p>
          </div>
        ))}
      </div>

    </div>
  );
}

"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabase";

export default function UploadPage() {
  const [file, setFile] = useState<File | null>(null);

  async function uploadFile() {
    if (!file) {
      alert("No file selected");
      return;
    }

    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (!user) {
      alert("Please login");
      return;
    }

    const { error } = await supabase.storage
      .from("creator-content")
      .upload(
        `${user.id}/${Date.now()}-${file.name}`,
        file
      );

    if (error) {
      alert(error.message);
      console.log(error);
      return;
    }

    alert("Upload Successful");
  }

  return (
    <div className="min-h-screen p-8">

      <h1 className="text-4xl font-bold mb-8">
        Upload Content
      </h1>

      <input
        type="file"
        onChange={(e) =>
          setFile(e.target.files?.[0] || null)
        }
      />

      <button
        onClick={uploadFile}
        className="bg-violet-600 text-white px-6 py-2 rounded-xl ml-4"
      >
        Upload
      </button>

    </div>
  );
}

"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";

export default function ContentCalendarPage() {
  const [items, setItems] = useState<any[]>([]);

  useEffect(() => {
    loadContent();
  }, []);

  async function loadContent() {
    const { data } = await supabase
      .from("content_calendar")
      .select("*")
      .order("created_at", { ascending: false });

    setItems(data || []);
  }

  return (
    <div className="min-h-screen p-8">

      <h1 className="text-4xl font-bold mb-8">
        Content Calendar
      </h1>

      <div className="space-y-4">
        {items.map((item) => (
          <div
            key={item.id}
            className="bg-white p-6 rounded-xl shadow"
          >
            <h2 className="font-bold text-xl">
              {item.title}
            </h2>

            <p className="text-gray-600">
              {item.platform}
            </p>

            <p>
              Status: {item.status}
            </p>

            <p>
              Publish Date: {item.publish_date}
            </p>
          </div>
        ))}
      </div>

    </div>
  );
}

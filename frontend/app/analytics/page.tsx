"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";

export default function AnalyticsPage() {
  const [memories, setMemories] = useState(0);
  const [calendar, setCalendar] = useState(0);
  
useEffect(() => {
  loadAnalytics();
}, []);

async function loadAnalytics() {
  const { count: memoryCount } = await supabase
    .from("creator_memory")
    .select("*", { count: "exact", head: true });

  const { count: calendarCount } = await supabase
    .from("content_calendar")
    .select("*", { count: "exact", head: true });

  setMemories(memoryCount || 0);
  setCalendar(calendarCount || 0);
}

  return (
    <div className="min-h-screen p-8">

      <h1 className="text-4xl font-bold mb-8">
        Analytics
      </h1>

      <div className="grid md:grid-cols-3 gap-6">

        <div className="bg-white p-6 rounded-xl shadow">
          <h2 className="font-semibold">
            Total Views
          </h2>

          <p className="text-3xl mt-3">
            245K
          </p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow">
          <h2 className="font-semibold">
            Engagement Rate
          </h2>

          <p className="text-3xl mt-3">
            8.2%
          </p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow">
          <h2 className="font-semibold">
            Retention Rate
          </h2>

          <p className="text-3xl mt-3">
            71%
          </p>
        </div>
        
<div className="bg-white p-6 rounded-xl shadow">
  <h2 className="font-semibold">
    Memories Saved
  </h2>

  <p className="text-3xl mt-3">
    {memories}
  </p>
</div>

<div className="bg-white p-6 rounded-xl shadow">
  <h2 className="font-semibold">
    Calendar Items
  </h2>

  <p className="text-3xl mt-3">
    {calendar}
  </p>
</div>


      </div>

    </div>
  );
}
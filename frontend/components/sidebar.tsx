"use client";

import { supabase } from "@/lib/supabase";
export default function Sidebar() {
  const handleLogout = async () => {
  await supabase.auth.signOut();
  window.location.href = "/login";
};
return ( <aside className="w-64 bg-white border-r p-6 min-h-screen"> <h2 className="text-2xl font-bold mb-8 text-violet-600">
CreatorVerse </h2>
  <nav className="space-y-4">

    <a
      href="/dashboard"
      className="block p-3 rounded-lg hover:bg-violet-100"
    >
      Dashboard
    </a>

    <a
      href="/creator-memory"
      className="block p-3 rounded-lg hover:bg-violet-100"
    >
      Creator Memory
    </a>

    <a
      href="/creator-chat"
      className="block p-3 rounded-lg hover:bg-violet-100"
    >
      Creator Chat
    </a>

    <a
      href="/audience-dna"
      className="block p-3 rounded-lg hover:bg-violet-100"
    >
      Audience DNA
    </a>

    <a
      href="/analytics"
      className="block p-3 rounded-lg hover:bg-violet-100"
    >
      Analytics
    </a>

    <a
      href="/content-studio"
      className="block p-3 rounded-lg hover:bg-violet-100"
    >
      Content Studio
    </a>

    <a
      href="/billing"
      className="block p-3 rounded-lg hover:bg-violet-100"
    >
      Billing
    </a>

    <a
      href="/profile"
      className="block p-3 rounded-lg hover:bg-violet-100"
    >
      Profile
    </a>

    <a
      href="/settings"
      className="block p-3 rounded-lg hover:bg-violet-100"
    >
      Settings
    </a>

    <a
      href="/history"
      className="block p-3 rounded-lg hover:bg-violet-100"
    >
      History
    </a>

    <button onClick={handleLogout}
  className="block p-3 rounded-lg hover:bg-red-100 text-red-600 w-full text-left"
>
  Logout
</button>

  </nav>
</aside>


);
}

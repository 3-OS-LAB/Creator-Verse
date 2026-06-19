export default function DashboardPage() {
  return (
    <div className="min-h-screen flex">
      <aside className="w-64 bg-slate-900 text-white p-6">
        <h2 className="text-2xl font-bold mb-8">
          CreatorVerse
        </h2>

        <nav className="space-y-4">
          <p>Dashboard</p>
          <p>Creator Memory</p>
          <p>Creator Chat</p>
          <p>Audience DNA</p>
          <p>Analytics</p>
          <p>Settings</p>
        </nav>
      </aside>

      <main className="flex-1 p-10">
        <h1 className="text-4xl font-bold mb-8">
          Dashboard
        </h1>

        <div className="grid md:grid-cols-4 gap-6">
          <div className="border rounded-xl p-6">
            Storytelling: 84%
          </div>

          <div className="border rounded-xl p-6">
            Humor: 72%
          </div>

          <div className="border rounded-xl p-6">
            Education: 61%
          </div>

          <div className="border rounded-xl p-6">
            Motivation: 89%
          </div>
        </div>
      </main>
    </div>
  );
}
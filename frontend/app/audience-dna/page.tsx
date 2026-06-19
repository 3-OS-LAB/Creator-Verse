export default function AudienceDNAPage() {
  return (
    <div className="min-h-screen p-8">

      <h1 className="text-4xl font-bold mb-8">
        Audience DNA
      </h1>

      <div className="grid md:grid-cols-2 gap-6">

        <div className="bg-white p-6 rounded-xl shadow">
          <h2 className="font-bold mb-4">
            Top Loved Topics
          </h2>

          <ul>
            <li>Startup Stories</li>
            <li>AI Content</li>
            <li>Productivity</li>
          </ul>
        </div>

        <div className="bg-white p-6 rounded-xl shadow">
          <h2 className="font-bold mb-4">
            Topics To Avoid
          </h2>

          <ul>
            <li>Long Intros</li>
            <li>Technical Jargon</li>
            <li>Off-topic Rants</li>
          </ul>
        </div>

      </div>

    </div>
  );
}
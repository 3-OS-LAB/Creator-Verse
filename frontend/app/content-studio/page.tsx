export default function ContentStudioPage() {
  return (
    <div className="min-h-screen p-8">

      <h1 className="text-4xl font-bold mb-8">
        Content Studio
      </h1>

      <div className="grid md:grid-cols-2 gap-6">

        <div className="bg-white p-6 rounded-xl shadow">
          <h2 className="font-bold mb-4">
            Video Ideas
          </h2>

          <ul className="space-y-2">
            <li>10 AI Tools Every Creator Needs</li>
            <li>My Biggest Startup Mistake</li>
            <li>How I Got My First 1000 Followers</li>
          </ul>
        </div>

        <div className="bg-white p-6 rounded-xl shadow">
          <h2 className="font-bold mb-4">
            Hook Generator
          </h2>

          <p>
            "I wish someone told me this before I started..."
          </p>
        </div>

      </div>

    </div>
  );
}
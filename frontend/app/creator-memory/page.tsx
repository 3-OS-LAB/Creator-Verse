
export default function CreatorMemoryPage() {
  const memories = [
    "My Startup Failed - Lessons Learned",
    "First Client Story",
    "Most Viral YouTube Video",
    "Biggest Business Mistake",
    "How I Grew My Audience",
    "AI Content Strategy",
  ];

  return (
    <div className="p-8">
      <h1 className="text-4xl font-bold mb-6">
        Creator Memory
      </h1>

      <input
        placeholder="Search stories, hooks, topics..."
        className="border p-3 rounded-lg w-full mb-6"
      />

      <div className="space-y-4">
        {memories.map((memory, index) => (
          <div
            key={index}
            className="p-4 border rounded-xl shadow-sm bg-white"
          >
            {memory}
          </div>
        ))}
      </div>
    </div>
  );
}
export default function OnboardingPage() {
  const niches = [
    "Business",
    "AI",
    "Education",
    "Fitness",
    "Comedy",
    "Technology",
    "Finance",
    "Storytelling",
  ];

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="max-w-4xl w-full bg-white rounded-2xl shadow-lg p-10">
        <h1 className="text-4xl font-bold mb-4">
          Welcome to CreatorVerse
        </h1>

        <p className="text-gray-600 mb-8">
          Let's build your Creator DNA.
        </p>

        <h2 className="text-xl font-semibold mb-4">
          Select Your Niche
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {niches.map((niche) => (
            <button
              key={niche}
              className="border rounded-xl p-4 hover:bg-violet-50 hover:border-violet-600"
            >
              {niche}
            </button>
          ))}
        </div>

        <button className="mt-8 bg-violet-600 text-white px-8 py-3 rounded-xl">
          Continue
        </button>
      </div>
    </div>
  );
}
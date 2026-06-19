export default function creatortypes() {
  const creators = [
    "Content Creators",
    "YouTubers",
    "Influencers",
    "Podcasters",
    "Educators",
    "Storytellers",
    "Stand-up Comedians",
    "Coaches",
  ];

  return (
    <section className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">
          Built For Every Creator
        </h2>

        <div className="grid md:grid-cols-4 gap-4">
          {creators.map((creator) => (
            <div
              key={creator}
              className="border rounded-xl p-6 text-center hover:shadow-lg transition"
            >
              {creator}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
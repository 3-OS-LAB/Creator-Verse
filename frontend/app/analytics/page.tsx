export default function AnalyticsPage() {
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

      </div>

    </div>
  );
}
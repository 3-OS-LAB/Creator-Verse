import Link from "next/link";

export default function AnalyzePage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">

      <div className="bg-white p-10 rounded-2xl shadow-xl text-center max-w-2xl">

        <h1 className="text-4xl font-bold mb-6">
          Analyzing Content...
        </h1>

        <p className="text-gray-600 mb-8">
          Building your Creator DNA Profile
        </p>

        <Link
          href="/dashboard"
          className="bg-violet-600 text-white px-8 py-3 rounded-xl"
        >
          View Dashboard
        </Link>

      </div>

    </div>
  );
}
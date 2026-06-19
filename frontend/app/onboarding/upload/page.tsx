import Link from "next/link";

export default function UploadPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">

      <div className="bg-white p-10 rounded-2xl shadow-xl text-center max-w-2xl">

        <h1 className="text-4xl font-bold mb-6">
          Upload Your Content
        </h1>

        <p className="text-gray-600 mb-6">
          Upload a video, podcast, article, or transcript.
        </p>

        <input
          type="file"
          className="mb-6"
        />

        <br />

        <Link
          href="/onboarding/analyze"
          className="bg-violet-600 text-white px-8 py-3 rounded-xl"
        >
          Analyze Content
        </Link>

      </div>

    </div>
  );
}
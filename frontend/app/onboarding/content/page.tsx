export default function ContentPage() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div>
        <h1 className="text-4xl font-bold mb-6">
          Content Sources
        </h1>

        <input
          placeholder="YouTube URL"
          className="border p-3 rounded-lg w-full mb-4"
        />

        <input
          placeholder="Instagram URL"
          className="border p-3 rounded-lg w-full mb-4"
        />

        <input
          placeholder="Website URL"
          className="border p-3 rounded-lg w-full"
        />
      </div>
    </div>
  );
}
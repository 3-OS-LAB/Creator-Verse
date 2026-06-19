export default function CreatorChatPage() {
  return (
    <div className="min-h-screen bg-gray-100 p-8">

      <h1 className="text-4xl font-bold mb-8">
        Creator Chat
      </h1>

      <div className="bg-white rounded-xl shadow p-6 space-y-6">

        <div className="flex justify-end">
          <div className="bg-violet-600 text-white p-4 rounded-xl max-w-md">
            What type of content performs best?
          </div>
        </div>

        <div className="flex justify-start">
          <div className="bg-gray-100 p-4 rounded-xl max-w-lg">
            Your highest-performing content contains
            personal stories, educational insights,
            and strong emotional hooks.
          </div>
        </div>

      </div>

      <div className="mt-6 flex gap-4">
        <input
          type="text"
          placeholder="Ask CreatorVerse..."
          className="flex-1 border p-4 rounded-xl"
        />

        <button className="bg-violet    -600 text-white px-8 rounded-xl">
          Send
        </button>
      </div>

    </div>
  );
}
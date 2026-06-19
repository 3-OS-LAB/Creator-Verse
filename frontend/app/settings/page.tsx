export default function SettingsPage() {
  return (
    <div className="min-h-screen p-8">
      <h1 className="text-4xl font-bold mb-8">
        Settings
      </h1>

      <div className="bg-white p-6 rounded-xl shadow space-y-4">
        <button className="border p-3 rounded-xl w-full">
          Change Password
        </button>

        <button className="border p-3 rounded-xl w-full">
          Notification Settings
        </button>

        <button className="border p-3 rounded-xl w-full">
          Theme Settings
        </button>
      </div>
    </div>
  );
}
export default function SignupPage() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="max-w-md w-full">
        <h1 className="text-4xl font-bold mb-8">
          Join CreatorVerse
        </h1>

        <input
          className="w-full border p-3 rounded-lg mb-4"
          placeholder="Full Name"
        />

        <input
          className="w-full border p-3 rounded-lg mb-4"
          placeholder="Email"
        />

        <input
          className="w-full border p-3 rounded-lg mb-4"
          placeholder="Password"
          type="password"
        />

        <button className="w-full bg-violet-600 text-white p-3 rounded-lg">
          Create Account
        </button>
      </div>
    </div>
  );
}
export default function LoginPage() {
  return (
    <div className="min-h-screen grid md:grid-cols-2">
      
      <div className="bg-violet-600 text-white flex flex-col justify-center p-16">
        <h1 className="text-5xl font-bold mb-6">
          CreatorVerse
        </h1>

        <p className="text-xl mb-8">
          The Intelligent Operating System for Creators
        </p>

        <ul className="space-y-4">
          <li>✓ Creator DNA</li>
          <li>✓ Creator Memory</li>
          <li>✓ Creator Chat</li>
          <li>✓ Audience Intelligence</li>
        </ul>
      </div>

      <div className="flex items-center justify-center">
        <div className="w-full max-w-md">
          <h2 className="text-3xl font-bold mb-8">
            Welcome Back
          </h2>

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
            Login
          </button>
        </div>
      </div>
    </div>
  );
}
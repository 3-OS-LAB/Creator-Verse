import Link from "next/link";
export default function navbar() {
  return (
    <nav className="border-b">
      <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-violet-600">
          CreatorVerse
        </h1>

        <div className="flex gap-6">
          <a href="#">Features</a>
          <a href="#">About</a>
          <a href="#">Pricing</a>
        </div>

        <Link href="/login" className="bg-violet-600 text-white px-6 py-3 rounded-xl">
          Login
        </Link>
      </div>
    </nav>
  );
}
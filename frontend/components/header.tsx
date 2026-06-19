export default function Header() {
  return (
    <header className="bg-white border-b p-4 flex justify-between items-center">

      <h1 className="text-2xl font-bold text-violet-600">
        CreatorVerse
      </h1>

      <div className="flex items-center gap-4">

        <input
          type="text"
          placeholder="Search..."
          className="border rounded-lg px-4 py-2"
        />

        <div className="w-10 h-10 rounded-full bg-violet-600 text-white flex items-center justify-center">
          CV
        </div>

      </div>

    </header>
  );
}
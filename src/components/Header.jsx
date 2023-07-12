export default function Header() {
  return (
    <nav className="flex items-center justify-between p-4">
      <div className="flex gap-4">
        <p className="text-2xl">🚀</p>
        <h1 className="text-2xl font-bold neon">RocketClicker</h1>
      </div>
      <button className="px-4 py-2 text-sm font-bold text-white bg-blue-500 rounded-lg">
        Menu
      </button>
    </nav>
  );
}

export default function Header() {
  return (
    <nav className="flex justify-between items-center p-4">
      <div className="flex gap-4">
        <p className="text-2xl">🚀</p>
        <h1 className="text-4xl font-bold neon">RocketClicker</h1>
      </div>
      <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
        Menu
      </button>
    </nav>
  );
}

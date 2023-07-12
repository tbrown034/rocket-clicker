import React, { useState } from "react";

export default function Header() {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const closeMenu = () => {
    setShowMenu(false);
  };

  return (
    <div>
      <nav className="flex items-center justify-between p-4">
        <div className="flex gap-4">
          <p className="text-2xl">🚀</p>
          <h1 className="text-2xl font-bold neon">RocketClicker</h1>
        </div>
        <button
          className="px-4 py-2 text-sm font-bold text-white bg-blue-500 rounded-lg"
          onClick={toggleMenu}
        >
          Menu
        </button>
      </nav>

      {showMenu && (
        <div className="flex flex-col items-center justify-center gap-2 p-4 text-white bg-blue-700 rounded-2xl ">
          <p>🚧 Under Construction 🚧</p>
          <button
            className="px-4 py-2 text-sm font-bold text-white bg-blue-900 rounded-lg"
            onClick={closeMenu}
          >
            Close
          </button>
        </div>
      )}
    </div>
  );
}

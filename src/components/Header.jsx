import React, { useState } from "react";

export default function Header({ onReset }) {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const closeMenu = () => {
    setShowMenu(false);
  };

  const handleReset = () => {
    onReset();
    closeMenu();
  };

  return (
    <div>
      <nav className="flex items-center justify-between p-4">
        <div className="flex gap-4">
          <p className="text-2xl">🚀</p>
          <h1 className="text-2xl font-bold neon">RocketClicker</h1>
        </div>
        <button
          className="px-4 py-2 text-sm font-bold text-white transition-colors bg-blue-500 rounded-lg hover:bg-blue-600"
          onClick={toggleMenu}
        >
          Menu
        </button>
      </nav>

      {showMenu && (
        <div className="flex justify-end">
          <div className="flex flex-col flex-wrap items-end justify-center gap-2 p-2 m-2 text-white transition-all duration-500 ease-in-out transform bg-blue-200 rounded-2xl ">
            <button
              className="px-4 py-2 text-sm font-bold text-white transition-all bg-blue-500 rounded-lg hover:bg-blue-400 active:bg-blue-300"
              onClick={closeMenu}
            >
              Close
            </button>
            <button
              className="px-4 py-2 text-sm font-bold text-white transition-all bg-blue-500 rounded-lg hover:bg-blue-400 active:bg-blue-300"
              onClick={handleReset}
            >
              Reset Game
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

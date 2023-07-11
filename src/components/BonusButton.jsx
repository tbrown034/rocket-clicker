// BonusBoosts.jsx
import React from "react";

function BonusButton({ onClick, count }) {
  return (
    <button
      className="p-2 py-8 text-xl border-4  hover:bg-blue-500 border-slate-300 rounded-2xl"
      onClick={onClick}
    >
      {" "}
      Bonus Boost ({count}) ⚡
    </button>
  );
}

export default BonusButton;

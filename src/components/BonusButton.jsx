// BonusBoosts.jsx
import React from "react";

function BonusButton({ onClick }) {
  return (
    <button
      className=" py-8 text-xl hover:bg-blue-500   border-4 p-2  border-slate-300 rounded-2xl"
      onClick={onClick}
    >
      {" "}
      Bonus Boost ⚡
    </button>
  );
}

export default BonusButton;

import React from "react";

function BoostButton({ onClick }) {
  return (
    <button
      className="   border-4 p-2  border-slate-300 rounded-2xl"
      onClick={onClick}
    >
      {" "}
      Launch 🚀
    </button>
  );
}

export default BoostButton;

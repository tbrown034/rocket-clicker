import React from "react";

function BackButton({ onClick }) {
  return (
    <button
      className="   border-4 p-2  border-slate-300 rounded-2xl"
      onClick={onClick}
    >
      {" "}
      Return to Earth 🌎
    </button>
  );
}

export default BackButton;

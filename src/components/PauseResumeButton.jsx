import React, { useState } from "react";
import { motion } from "framer-motion";

function PauseResumeButton() {
  const [isPaused, setIsPaused] = useState(false);

  return (
    <div className="flex justify-center">
      <motion.button
        className={`p-12 text-4xl text-white bg-blue-500 rounded-lg sm:p-16 focus:outline-none ${
          isPaused ? "hover:border-green-500" : "hover:border-yellow-500"
        }`}
        onClick={() => setIsPaused(!isPaused)}
        whileTap={{
          scale: 1.2,
          boxShadow: `${
            isPaused ? "0 0 50px 10px #008000" : "0 0 50px 10px #ff8c00"
          }`,
        }}
        whileHover={{
          scale: 0.9,
          boxShadow: `${isPaused ? "0 0 30px #ADFF2F" : "0 0 30px #FFFFE0"}`,
        }}
      >
        <span
          role="img"
          aria-label={isPaused ? "Resume" : "Pause"}
          style={{ fontSize: "1.5rem" }}
        >
          {isPaused ? "➡️" : "⏸️"}
        </span>
        <p>{isPaused ? "Resume" : "Pause"}</p>
      </motion.button>
    </div>
  );
}
export default PauseResumeButton;

import React from "react";
import { motion } from "framer-motion";

function PauseResumeButton({ isPaused, togglePause }) {
  return (
    <div className="flex justify-center">
      <motion.button
        className={`p-8 text-4xl text-white bg-blue-600 rounded-2xl sm:p-16 focus:outline-none ${
          isPaused ? "hover:border-green-500" : "hover:border-yellow-500"
        }`}
        onClick={togglePause}
        whileTap={{
          scale: 1.2,
          boxShadow: `${
            isPaused ? "0 0 50px 10px #008000" : "0 0 50px 10px #FFD700"
          }`,
        }}
        whileHover={{
          scale: 0.9,
          boxShadow: `${isPaused ? "0 0 30px #ADFF2F" : "0 0 30px #FFFFE0"}`,
        }}
      >
        {isPaused ? "Resume" : "Pause"}
      </motion.button>
    </div>
  );
}

export default PauseResumeButton;

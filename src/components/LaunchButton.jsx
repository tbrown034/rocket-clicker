import React from "react";
import { motion } from "framer-motion";

function LaunchButton({ onClick }) {
  return (
    <div className="flex justify-center">
      <motion.button
        className="p-4 py-8 text-3xl text-white bg-blue-500 border-4 border-blue-300 rounded-2xl hover:bg-blue-500 focus:outline-none"
        onClick={onClick}
        whileTap={{
          scale: 1.5,
          boxShadow: "0 0 50px 10px #FFD700",
        }}
        whileHover={{
          scale: 0.9,
          boxShadow: "0 0 30px #FFFFE0",
        }}
      >
        🚀 Launch 🚀
      </motion.button>
    </div>
  );
}

export default LaunchButton;

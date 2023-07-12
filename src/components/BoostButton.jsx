import React from "react";
import { motion } from "framer-motion";

function BoostButton({ onClick }) {
  return (
    <div className="flex justify-center">
      <motion.button
        className="p-8 text-4xl text-white bg-blue-600 rounded-2xl sm:p-16 focus:outline-none"
        onClick={onClick}
        whileTap={{
          scale: 1.2,
          boxShadow: "0 0 50px 10px #FFD700", // Increased blur radius and added spread radius
        }}
        whileHover={{
          scale: 0.9,
          boxShadow: "0 0 30px #FFFFE0",
        }}
      >
        ⚡ Boost ⚡
      </motion.button>
    </div>
  );
}

export default BoostButton;

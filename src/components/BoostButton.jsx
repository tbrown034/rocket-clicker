import React from "react";
import { motion } from "framer-motion";

function BoostButton({ onClick }) {
  return (
    <div className="flex justify-center">
      <motion.button
        className="p-4 text-3xl text-white bg-blue-500 rounded-lg focus:outline-none"
        onClick={onClick}
        whileTap={{ scale: 1.5 }}
        whileHover={{ scale: 0.9 }}
        style={{
          boxShadow:
            "0 0 10px #ff6d00, 0 0 20px #ff6d00, 0 0 30px #ff6d00, 0 0 40px #ff6d00",
        }}
      >
        ⚡ Boost ⚡
      </motion.button>
    </div>
  );
}

export default BoostButton;

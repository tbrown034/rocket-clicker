import React from "react";
import { motion } from "framer-motion";

function BoostButton({ onClick }) {
  return (
    <div className="flex justify-center ">
      <motion.button
        className="p-20 text-xl transition-all duration-200 ease-in-out border-4 active:bg-blue-900 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 border-slate-300 rounded-2xl hover:shadow-lg"
        onClick={onClick}
        whileTap={{ scale: 1.5 }}
        whileHover={{ scale: 0.9 }}
      >
        🔋 Booster 🔋
      </motion.button>
    </div>
  );
}

export default BoostButton;

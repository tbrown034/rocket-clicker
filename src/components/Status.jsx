import React from "react";
import { motion } from "framer-motion";

function Status({ distance, speed }) {
  const formattedDistance = distance.toFixed(0);
  const formattedSpeed = speed.toFixed(0);

  return (
    <div className="flex flex-wrap justify-around gap-4 p-2 font-bold sm:text-2xl">
      <motion.div
        className="p-2 border-4 border-blue-50 rounded-xl"
        key={`speed-${formattedSpeed}`}
        initial={{ scale: 1 }}
        animate={{ scale: 1.1 }}
        transition={{ duration: 0.5, yoyo: Infinity }}
      >
        {formattedSpeed} MPS
      </motion.div>
      <motion.div
        className="p-2 border-4 border-blue-50 rounded-xl"
        key={`distance-${formattedDistance}`}
        initial={{ scale: 1 }}
        animate={{ scale: 1.1 }}
        transition={{ duration: 0.5, yoyo: Infinity }}
      >
        {formattedDistance} Miles Traveled
      </motion.div>
    </div>
  );
}

export default Status;

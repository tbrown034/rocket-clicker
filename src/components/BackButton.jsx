import React, { useState } from "react";
import { motion } from "framer-motion";

function BackButton({ onClick }) {
  const [showModal, setShowModal] = useState(false);

  const handleConfirm = () => {
    setShowModal(false);
    onClick();
  };

  return (
    <>
      <div className="flex justify-center">
        <motion.button
          className="p-8 text-4xl text-white bg-blue-600 rounded-2xl sm:p-16 focus:outline-none"
          onClick={() => setShowModal(true)}
          whileTap={{
            scale: 1.2,
            boxShadow: "0 0 50px 10px #FFD700",
          }}
          whileHover={{
            scale: 0.9,
            boxShadow: "0 0 30px #FFFFE0",
          }}
        >
          Reset
        </motion.button>
      </div>

      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center px-8 py-2 bg-black bg-opacity-50">
          <div className="flex flex-col gap-4 p-8 text-white bg-blue-600 rounded-2xl focus:outline-none">
            <p className="text-xl font-semibold text-blue-200">
              Warning: This will erase all progress.
            </p>
            <div className="flex flex-wrap justify-around gap-4">
              <motion.button
                className="p-4 text-xl text-white bg-blue-500 rounded-2xl focus:outline-none"
                onClick={() => setShowModal(false)}
                whileTap={{
                  scale: 1,
                  boxShadow: "0 0 50px 10px #FFD700",
                }}
                whileHover={{
                  scale: 0.9,
                  boxShadow: "0 0 30px #FFFFE0",
                }}
              >
                Cancel
              </motion.button>
              <motion.button
                className="p-4 text-xl text-white bg-blue-500 rounded-2xl focus:outline-none"
                onClick={handleConfirm}
                whileTap={{
                  scale: 1,
                  boxShadow: "0 0 50px 10px #FFD700",
                }}
                whileHover={{
                  scale: 0.9,
                  boxShadow: "0 0 30px #FFFFE0",
                }}
              >
                Reset
              </motion.button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default BackButton;

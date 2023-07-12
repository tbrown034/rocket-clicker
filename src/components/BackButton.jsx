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
          className="p-4 text-3xl text-white bg-blue-500 rounded-2xl focus:outline-none"
          onClick={() => setShowModal(true)}
          whileTap={{
            scale: 1.2,
            boxShadow: "0 0 50px 10px #ff0000",
          }}
          whileHover={{
            scale: 1.1,
            boxShadow: "0 0 30px #FF4500",
          }}
        >
          <span role="img" aria-label="Earth" style={{ fontSize: "1.5rem" }}>
            🌎
          </span>
          <p>Return to Earth</p>
        </motion.button>
      </div>

      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center px-8 py-2 bg-black bg-opacity-50">
          <div className="flex flex-col gap-4 p-4 bg-blue-100 rounded-lg shadow-md">
            <p className="text-xl font-semibold text-blue-950">
              Warning: This will erase all progress.
            </p>
            <div className="flex justify-around gap-2">
              <motion.button
                className="p-4 text-white bg-blue-500 rounded-2xl focus:outline-none"
                onClick={() => setShowModal(false)}
                whileTap={{
                  scale: 1,
                  boxShadow: "0 0 50px 10px #0000FF",
                }}
                whileHover={{
                  scale: 0.9,
                  boxShadow: "0 0 30px #0000FF",
                }}
              >
                Cancel (Keep Going!)
              </motion.button>
              <motion.button
                className="p-4 text-white bg-blue-500 rounded-2xl focus:outline-none"
                onClick={handleConfirm}
                whileTap={{
                  scale: 1,
                  boxShadow: "0 0 50px 10px #ff0000",
                }}
                whileHover={{
                  scale: 0.9,
                  boxShadow: "0 0 30px #FF4500",
                }}
              >
                Reset (Back to Earth!)
              </motion.button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default BackButton;

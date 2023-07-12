import React, { useState } from "react";

function BackButton({ onClick }) {
  const [showModal, setShowModal] = useState(false);

  const handleConfirm = () => {
    setShowModal(false);
    onClick();
  };

  return (
    <>
      <button
        className="flex flex-col items-center p-2 py-8 text-xl border-4 hover:bg-blue-500 border-slate-300 rounded-2xl"
        onClick={() => setShowModal(true)}
      >
        <span role="img" aria-label="Earth" style={{ fontSize: "1.5rem" }}>
          🌎
        </span>
        <p>Return to Earth</p>
      </button>

      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="p-4 bg-blue-200 rounded-lg shadow-md">
            <p className="mb-2 text-xl font-semibold text-blue-950">
              Warning: This will erase all progress.
            </p>
            <div className="flex justify-end">
              <button
                className="px-4 py-2 mr-2 text-sm font-semibold bg-blue-500 rounded"
                onClick={() => setShowModal(false)}
              >
                Cancel
              </button>
              <button
                className="px-4 py-2 text-sm font-semibold text-white bg-red-500 rounded"
                onClick={handleConfirm}
              >
                Reset
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default BackButton;

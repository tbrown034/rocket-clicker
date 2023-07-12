import React from "react";

const Congratulations = ({ onReset }) => {
  const handleReset = () => {
    onReset();
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen p-8 text-white bg-blue-500">
      <h1 className="text-4xl font-bold">Congratulations, brave explorer!</h1>
      <p className="mt-4 text-xl">
        You've journeyed through the cosmos and achieved every milestone! Rocky
        the Rocket is proud of you!
      </p>
      <button
        className="px-4 py-2 mt-8 text-lg font-bold text-blue-500 bg-white rounded-lg"
        onClick={handleReset}
      >
        Back to Earth
      </button>
    </div>
  );
};

export default Congratulations;

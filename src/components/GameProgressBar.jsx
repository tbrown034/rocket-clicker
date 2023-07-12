import React from "react";

function GameProgressBar({ currentDistance, totalDistance }) {
  const progressPercentage = (currentDistance / totalDistance) * 100;

  return (
    <div className="flex flex-col gap-2">
      <p className="text-lg font-semibold">Overall Progress</p>
      <div className="w-48 h-4 bg-gray-200 rounded">
        <div
          className="h-full bg-green-500 rounded"
          style={{ width: `${progressPercentage}%` }}
        ></div>
      </div>
    </div>
  );
}

export default GameProgressBar;

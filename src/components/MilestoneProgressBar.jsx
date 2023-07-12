import React from "react";

function MilestoneProgressBar({ currentDistance, nextMilestoneDistance }) {
  const progressPercentage = (currentDistance / nextMilestoneDistance) * 100;

  return (
    <div className="flex flex-col gap-2">
      <p className="text-lg font-semibold">Progress to Next Milestone</p>
      <div className="w-48 h-4 bg-gray-200 rounded">
        <div
          className="h-full bg-blue-500 rounded"
          style={{ width: `${progressPercentage}%` }}
        ></div>
      </div>
    </div>
  );
}

export default MilestoneProgressBar;

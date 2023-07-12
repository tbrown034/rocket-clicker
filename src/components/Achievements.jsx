import React from "react";

function Achievements({ milestones, nextMilestone }) {
  return (
    <div className="flex flex-col justify-center gap-4 p-4 text-white rounded-lg shadow-md">
      {milestones[milestones.length - 1] && (
        <div className="p-4 bg-blue-700 rounded-lg shadow-inner">
          <h2 className="mb-2 font-mono text-3xl font-bold ">
            Current Status:
          </h2>
          <p className="text-xl font-bold border-t border-blue-600">
            {milestones[milestones.length - 1].step} at{" "}
            {milestones[milestones.length - 1].distance} miles
          </p>
          <p className="mt-1 text-xs italic">
            Reached on: {milestones[milestones.length - 1].completedAt}
          </p>
          <p className="mt-2 text-sm">
            {milestones[milestones.length - 1].story}
          </p>
        </div>
      )}
      {nextMilestone && (
        <div className="p-4 mt-4 bg-blue-700 rounded-lg shadow-inner">
          <h2 className="mb-2 font-mono text-2xl font-semibold">
            Next Milestone:
          </h2>
          <p className="flex flex-col pt-2 mt-2 border-t border-blue-600">
            {nextMilestone.step} at {nextMilestone.distance} miles.
          </p>
        </div>
      )}
      {milestones.length > 1 && (
        <div className="p-4 mt-4 bg-blue-700 rounded-lg shadow-inner">
          <h2 className="mb-2 font-mono text-2xl font-semibold">Log:</h2>
          {milestones
            .slice(0, milestones.length - 1)
            .map((milestone, index) => (
              <div
                className="flex flex-col pt-2 mt-2 border-t border-blue-600"
                key={index}
              >
                <p className="text-lg">
                  {milestone.step} at {milestone.distance} miles.
                </p>
                <p className="mt-1 text-sm">
                  Reached on: {milestone.completedAt}
                </p>
                <p className="mt-1 text-sm">{milestone.story}</p>
              </div>
            ))}
        </div>
      )}
    </div>
  );
}

export default Achievements;

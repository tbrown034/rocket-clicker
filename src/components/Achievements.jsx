import React from "react";

function Achievements({ milestones, nextMilestone }) {
  return (
    <div className="flex flex-col justify-center gap-4 p-4 text-white rounded-lg shadow-md">
      {milestones[milestones.length - 1] && (
        <div className="flex flex-col gap-2 p-4 bg-blue-700 rounded-lg shadow-inner">
          <h2 className="mb-2 font-mono text-3xl font-bold border-b border-blue-300">
            Mission Status
          </h2>

          <p className="text-lg">
            {" "}
            {milestones[milestones.length - 1].step} at{" "}
            {milestones[milestones.length - 1].distance} miles
          </p>
          <p className="mt-1 text-xs italic">
            Reached on: {milestones[milestones.length - 1].completedAt}
          </p>
          <div className="flex justify-center gap-1 py-8 mt-1 rounded-md ">
            <p className="text-5xl text-blue-200 ">"</p>

            <p className="text-2xl font-bold text-center text-white">
              {milestones[milestones.length - 1].story}
            </p>
            <p className="text-5xl text-blue-200 ">"</p>
          </div>
        </div>
      )}
      {nextMilestone && (
        <div className="p-4 mt-4 bg-blue-700 rounded-lg shadow-inner">
          <h2 className="mb-2 font-mono text-3xl font-bold border-b border-blue-300">
            Next Milestone
          </h2>
          <p className="flex flex-col pt-2 mt-2 border-t border-blue-600">
            {nextMilestone.step} at {nextMilestone.distance} miles.
          </p>
        </div>
      )}
      {milestones.length > 1 && (
        <div className="p-4 mt-4 bg-blue-700 rounded-lg shadow-inner">
          <h2 className="mb-2 font-mono text-3xl font-bold border-b border-blue-300">
            Captain's Log
          </h2>
          {milestones
            .slice(0, milestones.length - 1)
            .map((milestone, index) => (
              <div
                className="flex flex-col gap-4 pt-2 mt-2 border-t border-blue-600"
                key={index}
              >
                <p className="text-lg">
                  {milestone.step} at {milestone.distance} miles.
                </p>
                <p className="mt-1 text-sm">
                  Reached on: {milestone.completedAt}
                </p>
                <div className="flex justify-center gap-1 py-8 mt-1 rounded-md ">
                  <p className="text-5xl text-blue-200 ">"</p>
                  <p className="text-2xl font-bold text-center text-white">
                    {milestone.story}
                  </p>
                  <p className="text-5xl text-blue-200 ">"</p>
                </div>
              </div>
            ))}
        </div>
      )}
    </div>
  );
}

export default Achievements;

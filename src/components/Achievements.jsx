import React from "react";

function Achievements({ milestones, nextMilestone }) {
  return (
    <div className="flex flex-col justify-center">
      {milestones[milestones.length - 1] && (
        <div className="p-2 text-xl border-4 active:bg-blue-900 border-slate-300 rounded-2xl">
          <h2>Current Status:</h2>
          <p>
            {milestones[milestones.length - 1].step} at{" "}
            {milestones[milestones.length - 1].distance} miles.
          </p>
          <p>{milestones[milestones.length - 1].story}</p>
        </div>
      )}
      {nextMilestone && (
        <div className="p-2 text-xl border-4 active:bg-blue-900 border-slate-300 rounded-2xl">
          <h2>Next Milestone:</h2>
          <p>
            {nextMilestone.step} at {nextMilestone.distance} miles.
          </p>
        </div>
      )}
      <h2>Log:</h2>
      {milestones.slice(0, milestones.length - 1).map((milestone, index) => (
        <div className="flex flex-col" key={index}>
          <p>
            {milestone.step} at {milestone.distance} miles.
          </p>
          <p>{milestone.story}</p>
        </div>
      ))}
    </div>
  );
}

export default Achievements;

import React from "react";

function Achievements({ milestones, nextMilestone }) {
  return (
    <div>
      <h2>Completed Milestones</h2>
      {milestones.map((milestone, index) => (
        <div className="flex flex-col gap-8" key={index}>
          <p>
            {milestone.step} at {milestone.distance} miles.
          </p>
          <p>{milestone.story}</p>
        </div>
      ))}
      {nextMilestone && (
        <div>
          <h2>Next Milestone</h2>
          <p>
            {nextMilestone.step} at {nextMilestone.distance} miles.
          </p>
          <p>{nextMilestone.story}</p>
        </div>
      )}
    </div>
  );
}

export default Achievements;

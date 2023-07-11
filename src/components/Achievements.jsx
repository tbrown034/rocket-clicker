// Achievements.jsx
import React from "react";

function Achievements({ milestones }) {
  return (
    <div>
      <h2>Milestones</h2>
      {milestones.map((milestone, index) => (
        <p key={index}>
          {milestone.message} at {milestone.distance} miles.
        </p>
      ))}
    </div>
  );
}

export default Achievements;

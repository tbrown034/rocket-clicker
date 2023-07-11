// Achievements.jsx
import React from "react";

function Achievements({ milestones }) {
  return (
    <div>
      <h2>Achievements</h2>
      {milestones.map((milestone, index) => (
        <p key={index}>{milestone.message}</p>
      ))}
    </div>
  );
}

export default Achievements;

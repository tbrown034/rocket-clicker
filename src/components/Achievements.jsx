import React from "react";

function Achievements({ achievements }) {
  return (
    <div>
      <h2 className="text-2xl mb-4">Achievements</h2>
      {achievements.map((achievement, index) => (
        <div key={index}>{achievement}</div>
      ))}
    </div>
  );
}

export default Achievements;

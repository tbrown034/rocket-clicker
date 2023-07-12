import React from "react";

function Status({ distance, speed }) {
  const formattedDistance = distance.toFixed(0);
  const formattedSpeed = speed.toFixed(0);
  // Format the distance with two decimal points

  return (
    <div className="flex justify-around text-xl">
      <div className="p-2 border-2 border-blue-50 rounded-xl">
        {formattedSpeed} MPS
      </div>
      <div className="p-2 border-2 border-blue-50 rounded-xl">
        {formattedDistance} Miles Traveled
      </div>
    </div>
  );
}

export default Status;

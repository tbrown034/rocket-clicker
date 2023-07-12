import React from "react";

function Status({ distance }) {
  const formattedDistance = distance.toFixed(2); // Format the distance with two decimal points

  return (
    <div className="text-xl">
      Rocky Rocket 🚀 has travelled {formattedDistance} miles!
    </div>
  );
}

export default Status;

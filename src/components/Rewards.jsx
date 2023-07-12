import React, { useState } from "react";

const rewards = [
  {
    id: 1,
    type: "bonusBoost",
    label: "One-time Bonus Boost",
    value: 10, // This is the value that will be added to the distance once
    level: "low",
  },
  {
    id: 2,
    type: "bonusBoost",
    label: "One-time Bonus Boost",
    value: 20,
    level: "medium",
  },
  {
    id: 3,
    type: "bonusBoost",
    label: "One-time Bonus Boost",
    value: 30,
    level: "high",
  },
  {
    id: 4,
    type: "timedModifier",
    label: "Timed Modifier",
    value: 2, // This is the multiplier that will be applied to the boost speed
    level: "low",
  },
  {
    id: 5,
    type: "timedModifier",
    label: "Timed Modifier",
    value: 5,
    level: "medium",
  },
  {
    id: 6,
    type: "timedModifier",
    label: "Timed Modifier",
    value: 10,
    level: "high",
  },
];

function Rewards({ onRewardSelected }) {
  const [selectedReward, setSelectedReward] = useState(null);

  const handleRewardSelection = (reward) => {
    setSelectedReward(reward);
    onRewardSelected(reward);
  };

  return (
    <div>
      <h2>Congratulations! Choose your reward:</h2>
      {rewards.map((reward) => (
        <button
          key={reward.id}
          onClick={() => handleRewardSelection(reward)}
          className={reward.id === selectedReward?.id ? "selected" : ""}
        >
          {reward.label} ({reward.level})
        </button>
      ))}
    </div>
  );
}

export default Rewards;

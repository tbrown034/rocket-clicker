import React, { useState } from "react";
import Rocket from "./Rocket";
import BoostButton from "./BoostButton";
import Achievements from "./Achievements";
import Upgrades from "./Upgrades";

function Game() {
  const [distance, setDistance] = useState(0);
  const [achievements, setAchievements] = useState([]);
  const [upgrades, setUpgrades] = useState([
    { name: "Auto-Booster", cost: 10 },
    { name: "Fuel Efficiency", cost: 20 },
  ]);

  const boost = () => {
    setDistance(distance + 1);
  };

  const purchaseUpgrade = (index) => {
    const upgrade = upgrades[index];
    if (distance >= upgrade.cost) {
      setDistance(distance - upgrade.cost);
      setAchievements([...achievements, upgrade.name]);
    }
  };

  return (
    <div>
      <Rocket distance={distance} />
      <BoostButton onClick={boost} />
      {/* <Achievements achievements={achievements} />
      <Upgrades upgrades={upgrades} onPurchase={purchaseUpgrade} /> */}
    </div>
  );
}

export default Game;

// Game.jsx
import React, { useState, useEffect } from "react";
import Status from "./Status";
import BoostButton from "./BoostButton";
import BackButton from "./BackButton";
import LaunchButton from "./LaunchButton";
import Achievements from "./Achievements";
import BonusButton from "./BonusButton";

function Game() {
  const [distance, setDistance] = useState(0);
  const [isLaunched, setIsLaunched] = useState(false);
  const [milestones, setMilestones] = useState([
    { distance: 100, message: "Cleared Earth's atmosphere", boost: 10 },
    { distance: 400, message: "Reached the thermosphere", boost: 20 },
    // Add more milestones here...
  ]);

  const boost = () => {
    setDistance(distance + 10);
  };

  const bonusBoost = () => {
    setDistance(distance + 100);
  };

  const back = () => {
    setDistance(0);
    setIsLaunched(false);
  };

  const launch = () => {
    setIsLaunched(true);
  };

  useEffect(() => {
    let interval;
    if (isLaunched) {
      interval = setInterval(() => {
        setDistance((distance) => distance + 1);
      }, 1000);
    } else if (!isLaunched && distance !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isLaunched, distance]);

  return (
    <div className="flex flex-col gap-20 py-20">
      {isLaunched ? (
        <>
          <Status distance={distance} />
          <Achievements milestones={milestones} />
          <BonusButton onClick={bonusBoost} />
          <div className="flex gap-8 flex-col ">
            <BoostButton onClick={boost} />
            <BackButton onClick={back} />
          </div>
        </>
      ) : (
        <LaunchButton onClick={launch} />
      )}
    </div>
  );
}

export default Game;

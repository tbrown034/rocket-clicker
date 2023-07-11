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
  const [currentMilestoneIndex, setCurrentMilestoneIndex] = useState(0);
  const [bonusAvailable, setBonusAvailable] = useState(false);

  const [milestones, setMilestones] = useState([
    { distance: 100, message: "Cleared Earth's atmosphere", boost: 10 },
    { distance: 400, message: "Reached the thermosphere", boost: 20 },
    { distance: 1000, message: "Entered low Earth orbit (LEO)", boost: 30 },
    {
      distance: 2000,
      message: "Completed one full orbit around Earth",
      boost: 40,
    },
    { distance: 2500, message: "Crossed the Kármán line", boost: 50 },
    { distance: 3000, message: "Entered the mesosphere", boost: 60 },
    { distance: 4000, message: "Reached the stratopause", boost: 70 },
    { distance: 5000, message: "Entered the ionosphere", boost: 80 },
    { distance: 6000, message: "Reached the exosphere", boost: 90 },
    { distance: 7000, message: "Crossed the magnetopause", boost: 100 },
    {
      distance: 8000,
      message: "Passed through the Van Allen radiation belts",
      boost: 110,
    },
    {
      distance: 9000,
      message: "Reached escape velocity from Earth's gravitational pull",
      boost: 120,
    },
    { distance: 10000, message: "Entered heliocentric orbit", boost: 130 },
    { distance: 12000, message: "Crossed the orbit of Venus", boost: 140 },
    { distance: 14000, message: "Crossed the orbit of Mars", boost: 150 },
    { distance: 16000, message: "Crossed the asteroid belt", boost: 160 },
    {
      distance: 18000,
      message: "Entered Jupiter's gravitational influence",
      boost: 170,
    },
    { distance: 20000, message: "Crossed the orbit of Saturn", boost: 180 },
    {
      distance: 22000,
      message: "Entered Uranus's gravitational influence",
      boost: 190,
    },
    { distance: 24000, message: "Crossed the orbit of Neptune", boost: 200 },
  ]);
  const boost = () => {
    setDistance(distance + 10);
  };

  const bonusBoost = () => {
    // Use the boost from the current milestone
    setDistance(distance + milestones[currentMilestoneIndex].boost);
    // Set bonusAvailable to false
    setBonusAvailable(false);
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
        setDistance((distance) => {
          // Check if the rocket has reached the next milestone
          if (
            currentMilestoneIndex < milestones.length &&
            distance >= milestones[currentMilestoneIndex].distance
          ) {
            // Update the currentMilestoneIndex
            setCurrentMilestoneIndex(currentMilestoneIndex + 1);
            // Set bonusAvailable to true
            setBonusAvailable(true);
          }
          return distance + 1;
        });
      }, 1000);
    } else if (!isLaunched && distance !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isLaunched, distance, currentMilestoneIndex, milestones]);

  return (
    <div className="flex flex-col gap-20 py-20">
      {isLaunched ? (
        <>
          <Status distance={distance} />
          <Achievements
            milestones={milestones.slice(0, currentMilestoneIndex)}
          />
          {bonusAvailable && <BonusButton onClick={bonusBoost} />}
          <div className="flex flex-col gap-8 ">
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

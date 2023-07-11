import React, { useState, useEffect } from "react";
import Status from "./Status";
import BoostButton from "./BoostButton";
import BackButton from "./BackButton";
import LaunchButton from "./LaunchButton";
import Achievements from "./Achievements";
import BonusButton from "./BonusButton";
import Rules from "./Rules";

function Game() {
  const [distance, setDistance] = useState(0); // Distance traveled by the rocket
  const [isLaunched, setIsLaunched] = useState(false); // Launch status of the rocket
  const [currentMilestoneIndex, setCurrentMilestoneIndex] = useState(0); // Index of the current milestone
  const [bonusBoostCount, setBonusBoostCount] = useState(0); // Count of available bonus boosts
  const [intervalDelay, setIntervalDelay] = useState(1000); // Delay for the interval, starting at 1s
  const [speed, setSpeed] = useState(1); // Speed of the rocket, starts at 1

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
    setDistance(distance + 10); // Increase the distance by 10 when the boost button is clicked
  };

  const bonusBoost = () => {
    if (bonusBoostCount > 0) {
      // Check if there are available bonus boosts
      setDistance(
        distance + milestones[currentMilestoneIndex].boost * bonusBoostCount
      ); // Increase the distance by the boosted value
      setBonusBoostCount(bonusBoostCount - 1); // Decrease the bonus boost count
    }
  };

  const back = () => {
    setDistance(0); // Reset the distance to 0 when the back button is clicked
    setIsLaunched(false); // Set the launch status to false
    setBonusBoostCount(0); // Reset the bonus boost count
    setCurrentMilestoneIndex(0); // Reset the current milestone index
    setSpeed(1);
  };

  const launch = () => {
    setIsLaunched(true); // Set the launch status to true when the launch button is clicked
  };

  useEffect(() => {
    let interval;

    if (isLaunched) {
      interval = setInterval(() => {
        setDistance((prevDistance) => prevDistance + 1);
      }, intervalDelay);
    } else {
      clearInterval(interval);
    }

    return () => {
      clearInterval(interval);
    };
  }, [isLaunched, intervalDelay]);

  useEffect(() => {
    if (
      currentMilestoneIndex < milestones.length &&
      distance >= milestones[currentMilestoneIndex].distance
    ) {
      setBonusBoostCount((prevCount) => prevCount + 1);
      setCurrentMilestoneIndex((prevIndex) => prevIndex + 1);
      setIntervalDelay((prevIntervalDelay) => prevIntervalDelay * 0.5); // Decrease the interval delay by 50%

      setSpeed((prevSpeed) => prevSpeed * 1.5); // Here we increase the speed by 50%
    }
  }, [distance, currentMilestoneIndex, milestones]);

  return (
    <div className="flex flex-col gap-20 py-20">
      {isLaunched ? (
        <>
          <Status distance={distance} />
          <div>
            <h2>Speed: {speed.toFixed(2)} mi/s</h2>
          </div>
          <Achievements
            milestones={milestones.slice(0, currentMilestoneIndex)}
          />
          {currentMilestoneIndex < milestones.length && (
            <div>
              <h2>Next Milestone</h2>
              <p>
                {milestones[currentMilestoneIndex].message} at{" "}
                {milestones[currentMilestoneIndex].distance} km
              </p>
            </div>
          )}
          {bonusBoostCount > 0 && (
            <BonusButton onClick={bonusBoost} count={bonusBoostCount} />
          )}
          <div className="flex flex-col gap-8 ">
            <BoostButton onClick={boost} />
            <BackButton onClick={back} />
          </div>
        </>
      ) : (
        <div className="flex flex-col gap-4">
          <LaunchButton onClick={launch} />
          <Rules />
        </div>
      )}
    </div>
  );
}

export default Game;

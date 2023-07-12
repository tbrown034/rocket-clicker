import React, { useState, useEffect } from "react";
import Status from "./Status";
import BoostButton from "./BoostButton";
import BackButton from "./BackButton";
import LaunchButton from "./LaunchButton";
import Achievements from "./Achievements";
import Rewards from "./Rewards"; // Assuming you have a Rewards component
import Rules from "./Rules";
import milestones from "./MilestonesData";

function Game() {
  const [distance, setDistance] = useState(0);
  const [isLaunched, setIsLaunched] = useState(false);
  const [currentMilestoneIndex, setCurrentMilestoneIndex] = useState(0);
  const [intervalDelay, setIntervalDelay] = useState(1000);
  const [passiveSpeed, setPassiveSpeed] = useState(1);
  const [boostSpeed, setBoostSpeed] = useState(1);
  const [timedModifier, setTimedModifier] = useState(1);
  const [rewardTimer, setRewardTimer] = useState(0);
  const [rewardSelected, setRewardSelected] = useState(false);

  const boost = () => {
    setDistance(distance + boostSpeed * timedModifier);
  };

  const back = () => {
    setDistance(0);
    setIsLaunched(false);
    setCurrentMilestoneIndex(0);
    setPassiveSpeed(1);
    setBoostSpeed(1);
    setTimedModifier(1);
    setRewardTimer(0);
    setRewardSelected(false);
  };

  const launch = () => {
    setIsLaunched(true);
  };

  const applyReward = (reward) => {
    setRewardSelected(true);
    if (reward.type === "bonusBoost") {
      setDistance(distance + reward.value);
    } else if (reward.type === "timedModifier") {
      setTimedModifier(reward.value);
      setRewardTimer(10); // Set the time duration for the timed modifier
    }
  };

  useEffect(() => {
    let interval;

    if (isLaunched) {
      interval = setInterval(() => {
        setDistance((prevDistance) => prevDistance + passiveSpeed);
      }, intervalDelay);
    } else {
      clearInterval(interval);
    }

    return () => {
      clearInterval(interval);
    };
  }, [isLaunched, intervalDelay, passiveSpeed]);

  useEffect(() => {
    if (
      currentMilestoneIndex < milestones.length &&
      distance >= milestones[currentMilestoneIndex].distance
    ) {
      setCurrentMilestoneIndex(currentMilestoneIndex + 1);
      setPassiveSpeed(passiveSpeed + currentMilestoneIndex * 0.5); // Increasing speed progressively with milestones
      setBoostSpeed(boostSpeed + currentMilestoneIndex * 0.5); // Increasing boost speed progressively with milestones
    }
  }, [distance, currentMilestoneIndex, milestones]);

  useEffect(() => {
    if (rewardTimer > 0) {
      const timer = setTimeout(() => {
        setRewardTimer(rewardTimer - 1);
      }, 1000);
      if (rewardTimer === 1) {
        setTimedModifier(1); // Reset the timed modifier when the timer runs out
      }
      return () => clearTimeout(timer);
    }
  }, [rewardTimer]);

  return (
    <div className="flex flex-col gap-20 py-20">
      {isLaunched ? (
        <>
          <BoostButton onClick={boost} />

          <Status distance={distance} />
          <div className="flex flex-col gap-8 "></div>
          <div>
            <h2>Speed: {passiveSpeed.toFixed(1)} mi/s</h2>
          </div>
          <Achievements
            milestones={milestones.slice(0, currentMilestoneIndex)}
            nextMilestone={milestones[currentMilestoneIndex]}
          />
          {!rewardSelected && currentMilestoneIndex > 0 && (
            <Rewards onRewardSelected={applyReward} />
          )}
          <BackButton onClick={back} />
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

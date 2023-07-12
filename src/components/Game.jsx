import React, { useState, useEffect } from "react";
import Status from "./Status";
import BoostButton from "./BoostButton";
import BackButton from "./BackButton";
import PauseResumeButton from "./PauseResumeButton";
import LaunchButton from "./LaunchButton";
import Achievements from "./Achievements";
import Rules from "./Rules";
import Congratulations from "./Congratulations";
import milestones from "./MilestonesData";
import Header from "./Header";
import MilestoneProgressBar from "./MilestoneProgressBar";
import GameProgressBar from "./GameProgressBar";

function Game() {
  const [distance, setDistance] = useState(0);
  const [isLaunched, setIsLaunched] = useState(false);
  const [currentMilestoneIndex, setCurrentMilestoneIndex] = useState(0);
  const [passiveSpeed, setPassiveSpeed] = useState(1);
  const [boostSpeed, setBoostSpeed] = useState(1);
  const [timedModifier, setTimedModifier] = useState(1);
  const [isPaused, setIsPaused] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);

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
  };

  const launch = () => {
    setIsLaunched(true);
    milestones[0].completedAt = new Date().toLocaleString();
  };

  const togglePause = () => {
    setIsPaused((prevIsPaused) => !prevIsPaused);
  };

  useEffect(() => {
    let interval;

    if (isLaunched && !isPaused) {
      interval = setInterval(() => {
        setDistance((prevDistance) => prevDistance + passiveSpeed);
      }, 1000);
    } else {
      clearInterval(interval);
    }

    return () => {
      clearInterval(interval);
    };
  }, [isLaunched, passiveSpeed, isPaused]);

  useEffect(() => {
    if (
      currentMilestoneIndex < milestones.length &&
      distance >= milestones[currentMilestoneIndex].distance
    ) {
      setCurrentMilestoneIndex((prevIndex) => {
        const newIndex = prevIndex + 1;
        if (newIndex < milestones.length) {
          milestones[newIndex].completedAt = new Date().toLocaleString();
        }
        return newIndex;
      });
      setPassiveSpeed(passiveSpeed + currentMilestoneIndex * 0.5);
      setBoostSpeed(boostSpeed + currentMilestoneIndex * 0.5);
    }

    if (distance >= milestones[milestones.length - 1].distance) {
      setIsLaunched(false);
      setIsCompleted(true);
    }
  }, [distance, currentMilestoneIndex, milestones]);

  if (isCompleted) {
    return <Congratulations onReset={() => setIsCompleted(false)} />;
  }

  return (
    <div>
      <Header onReset={back} />
      <div className="flex flex-col gap-8 py-8">
        {isLaunched ? (
          <div className="flex flex-col gap-4 py-8">
            <BoostButton onClick={boost} />
            <Status distance={distance} speed={passiveSpeed} />
            <MilestoneProgressBar
              currentDistance={distance}
              nextMilestoneDistance={milestones[currentMilestoneIndex].distance}
            />
            <GameProgressBar
              currentDistance={distance}
              totalDistance={milestones[milestones.length - 1].distance}
            />
            <Achievements
              milestones={milestones.slice(0, currentMilestoneIndex)}
              nextMilestone={milestones[currentMilestoneIndex]}
            />
          </div>
        ) : (
          <div className="flex flex-col gap-20 p-8 ">
            <LaunchButton onClick={launch} />
            <Rules />
          </div>
        )}
        {isLaunched && (
          <PauseResumeButton isPaused={isPaused} togglePause={togglePause} />
        )}
        {isLaunched && <BackButton onClick={back} />}
      </div>
    </div>
  );
}

export default Game;

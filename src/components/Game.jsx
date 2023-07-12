import React, { useState, useEffect } from "react";
import Status from "./Status";
import BoostButton from "./BoostButton";
import BackButton from "./BackButton";
import LaunchButton from "./LaunchButton";
import Achievements from "./Achievements";
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
    milestones[0].completedAt = new Date().toLocaleString(); // Initialize completedAt property for the first milestone
  };

  const getHome = () => {
    if (distance >= milestones[milestones.length - 1].distance) {
      setIsLaunched(false);
      setIsCompleted(true);
    }
  };

  useEffect(() => {
    let interval;

    if (isLaunched && !isPaused) {
      interval = setInterval(() => {
        setDistance((prevDistance) => prevDistance + passiveSpeed);
      }, intervalDelay);
    } else {
      clearInterval(interval);
    }

    return () => {
      clearInterval(interval);
    };
  }, [isLaunched, intervalDelay, passiveSpeed, isPaused]);

  useEffect(() => {
    if (
      currentMilestoneIndex < milestones.length &&
      distance >= milestones[currentMilestoneIndex].distance
    ) {
      setCurrentMilestoneIndex((prevIndex) => {
        const newIndex = prevIndex + 1;
        milestones[newIndex].completedAt = new Date().toLocaleString(); // Initialize completedAt property for the next milestone
        return newIndex;
      });
      setPassiveSpeed(passiveSpeed + currentMilestoneIndex * 0.5);
      setBoostSpeed(boostSpeed + currentMilestoneIndex * 0.5);
    }
  }, [distance, currentMilestoneIndex, milestones]);

  useEffect(() => {
    getHome();
  }, [distance]);

  if (isCompleted) {
    return (
      <div className="completion-screen">
        <h1>Congratulations, brave explorer!</h1>
        <p>
          You've journeyed through the cosmos and achieved every milestone!
          Rocky the Rocket is proud of you!
        </p>
        <button onClick={() => setIsCompleted(false)}>Back to Earth</button>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-20 py-20">
      {isLaunched ? (
        <>
          <BoostButton onClick={boost} />
          <Status distance={distance} speed={passiveSpeed} />
          <Achievements
            milestones={milestones.slice(0, currentMilestoneIndex)}
            nextMilestone={milestones[currentMilestoneIndex]}
          />
        </>
      ) : (
        <div className="flex flex-col gap-10">
          <LaunchButton onClick={launch} />
          <Rules />
        </div>
      )}
      {isLaunched && (
        <button
          className="p-2 py-8 text-xl border-4 hover:bg-blue-500 border-slate-300 rounded-2xl"
          onClick={() => setIsPaused(!isPaused)}
        >
          {isPaused ? "Resume ➡️" : "Pause ⏸️"}
        </button>
      )}
      {isLaunched && <BackButton onClick={back} />}
    </div>
  );
}

export default Game;

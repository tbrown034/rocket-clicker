import React, { useState, useEffect } from "react";
import Status from "./Status";
import BoostButton from "./BoostButton";
import BackButton from "./BackButton";
import LaunchButton from "./LaunchButton";

function Game() {
  const [distance, setDistance] = useState(0);
  const [isLaunched, setIsLaunched] = useState(false);

  const boost = () => {
    setDistance(distance + 10);
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
          <BoostButton onClick={boost} />
          <BackButton onClick={back} />
        </>
      ) : (
        <LaunchButton onClick={launch} />
      )}
    </div>
  );
}

export default Game;

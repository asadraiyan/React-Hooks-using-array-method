import React, { useState } from "react";

const StopWatch = () => {
  const [min, setMin] = useState(0);
  const [sec, setSec] = useState(0);
  const [clearTime, setClearTime] = useState();

  const handleStart = () => {
    startRun();
    setClearTime(setInterval(startRun, 1000));
  };
  const startRun = () => {
    setSec((prevSec) => {
      if (prevSec === 59) {
        setMin((prevMin) => prevMin + 1);
        return 0;
      } else {
        return prevSec + 1;
      }
    });
  };
  const handleStop = () => {
    clearInterval(clearTime);
  };
  const handleReset = () => {
    clearInterval(clearTime);
    setMin(0);
    setSec(0);
  };
  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          padding: "1rem",
        }}
      >
        <h2>Stopwatch Timer</h2>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            gap: "10px",
            marginTop: "10px",
          }}
        >
          <h3>{min} min</h3>
          <h3>{sec} sec</h3>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            gap: "10px",
            marginTop: "10px",
          }}
        >
          <button onClick={handleStart}>Start</button>
          <button onClick={handleStop}>Stop</button>
          <button onClick={handleReset}>Reset</button>
        </div>
      </div>
    </>
  );
};

export default StopWatch;

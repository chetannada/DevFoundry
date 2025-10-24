import { useState, useEffect, useRef } from "react";
import TickCircle from "./TickCircle";
import TimerDisplay from "./TimerDisplay";
import TimerControls from "./TimerControls";
import LapTable from "./LapTable";

const Stopwatch = () => {
  const [time, setTime] = useState(0); // in milliseconds
  const [isRunning, setIsRunning] = useState(false);
  const [laps, setLaps] = useState([]);
  const [showLapTable, setShowLapTable] = useState(false);

  const intervalRef = useRef(null);

  const handleStart = () => {
    if (!isRunning) {
      const startTime = Date.now() - time;
      intervalRef.current = setInterval(() => {
        setTime(Date.now() - startTime);
      }, 10);
      setIsRunning(true);
    }
  };

  const handleStop = () => {
    clearInterval(intervalRef.current);
    setIsRunning(false);
  };

  const handleReset = () => {
    clearInterval(intervalRef.current);
    setTime(0);
    setIsRunning(false);
    setLaps([]);
    setShowLapTable(false);
  };

  useEffect(() => {
    return () => clearInterval(intervalRef.current);
  }, []);

  const handleLap = () => {
    const lapTime = time;
    const overallTime = laps.length > 0 ? lapTime - laps[laps.length - 1].lapTime : lapTime;

    const newLap = {
      id: laps.length + 1,
      lapTime,
      overallTime,
    };

    setLaps([newLap, ...laps]);
    setShowLapTable(true);
  };

  return (
    <div className="flex flex-col gap-6 items-center justify-center ">
      <h1 className="text-5xl font-medium text-center mb-5">Stopwatch</h1>

      <div className="relative w-64 h-64 flex items-center justify-center">
        <TickCircle activeIndex={Math.floor((time / 1000) % 60)} totalTicks={60} />

        <div className="absolute w-full h-full rounded-full border-4 border-secondary-light dark:border-secondary-dark" />

        <TimerDisplay time={time} />
      </div>

      <TimerControls
        isRunning={isRunning}
        handleStart={handleStart}
        handleStop={handleStop}
        handleReset={handleReset}
        handleLap={handleLap}
        isDisabled={time === 0}
        hasStarted={time > 0}
      />

      {showLapTable && <LapTable laps={laps} />}
    </div>
  );
};

export default Stopwatch;

import { FaPlay, FaPause, FaRedo, FaFlag } from "react-icons/fa";

const TimerControls = ({
  isRunning,
  handleStart,
  handleStop,
  handleReset,
  handleLap,
  isDisabled,
  hasStarted,
}) => {
  return (
    <div className="mt-8 flex flex-wrap gap-7 items-center">
      {/* Lap or Reset */}
      <button
        onClick={isRunning ? handleLap : handleReset}
        disabled={!isRunning && isDisabled}
        className={`flex gap-4 items-center text-base px-5 py-2.5 font-medium rounded-lg border border-secondary-light dark:border-secondary-dark 
          hover:shadow-md hover:bg-hover-light hover:dark:bg-hover-dark 
          ${!isRunning && isDisabled ? "opacity-50 cursor-not-allowed" : "transition-all duration-200 ease-in-out active:scale-105 active:translate-y-0.5"}`}
      >
        {isRunning || !hasStarted ? (
          <>
            <FaFlag /> Lap
          </>
        ) : (
          <>
            <FaRedo /> Reset
          </>
        )}
      </button>

      {/* Start / Stop / Resume */}
      <button
        onClick={isRunning ? handleStop : handleStart}
        className="flex gap-4 items-center text-base px-5 py-2.5 font-medium rounded-lg bg-secondary-light dark:bg-secondary-dark text-white hover:bg-secondary-dark hover:dark:bg-secondary-light transition"
      >
        {isRunning ? (
          <>
            <FaPause /> Stop
          </>
        ) : hasStarted ? (
          <>
            <FaPlay /> Resume
          </>
        ) : (
          <>
            <FaPlay /> Start
          </>
        )}
      </button>
    </div>
  );
};

export default TimerControls;

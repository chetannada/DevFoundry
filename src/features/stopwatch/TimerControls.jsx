import { FaPlay, FaPause, FaRedo } from "react-icons/fa";

const TimerControls = ({ isRunning, time, handleStart, handleStop, handleReset, isDisabled }) => {
  return (
    <div className="mt-8 flex flex-wrap gap-7 items-center">
      <button
        onClick={handleReset}
        disabled={isDisabled}
        className={`flex gap-4 items-center text-base px-5 py-2.5 font-medium rounded-lg border border-secondary-light dark:border-secondary-dark 
          hover:shadow-md hover:bg-hover-light hover:dark:bg-hover-dark 
           ${isDisabled ? "opacity-50 cursor-not-allowed" : "transition-all duration-200 ease-in-out active:scale-105 active:translate-y-0.5"}`}
      >
        <FaRedo /> Reset
      </button>

      <button
        onClick={isRunning ? handleStop : handleStart}
        className="flex gap-4 items-center text-base px-5 py-2.5 font-medium rounded-lg bg-secondary-light dark:bg-secondary-dark text-white hover:bg-secondary-dark hover:dark:bg-secondary-light transition"
      >
        {isRunning ? (
          <>
            <FaPause /> Stop
          </>
        ) : time > 0 ? (
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

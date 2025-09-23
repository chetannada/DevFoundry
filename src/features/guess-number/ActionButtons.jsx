import React from "react";

const ActionButtons = ({ onGuess, onReset, disabled }) => {
  return (
    <div className="flex flex-wrap gap-6 mt-8 justify-center">
      <button
        onClick={onGuess}
        disabled={disabled}
        className={`text-base px-10 py-2.5 font-normal rounded-lg
      transition-all duration-300 ${
        disabled
          ? "bg-border-dark dark:bg-border-light text-gray-400 dark:text-gray-600 cursor-not-allowed"
          : "text-white bg-gradient-to-br from-secondary-light to-secondary-dark hover:bg-gradient-to-bl hover:scale-105 active:scale-95 active:bg-opacity-80"
      }`}
      >
        Guess
      </button>
      <button
        onClick={onReset}
        className="text-base px-10 py-2.5 border border-secondary-light dark:border-secondary-dark hover:shadow-md hover:bg-hover-light hover:dark:bg-hover-dark transition-all duration-200 font-normal rounded-lg"
      >
        Reset
      </button>
    </div>
  );
};

export default ActionButtons;

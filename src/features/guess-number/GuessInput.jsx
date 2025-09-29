const GuessInput = ({ guess, setGuess, disabled, handleGuess }) => {
  const handleOnChange = e => {
    const value = e.target.value;

    // Allow only numbers and limit to 3 characters
    if (/^\d{0,3}$/.test(value)) {
      setGuess(value);
    }
  };

  const handleKeyDown = e => {
    if (e.key === "Enter" && !disabled && guess) {
      handleGuess();
    }
  };

  return (
    <input
      type="text"
      value={guess}
      onChange={handleOnChange}
      onKeyDown={handleKeyDown}
      disabled={disabled}
      className="w-full px-4 py-2 rounded-md border border-border-light dark:border-border-dark bg-body-light dark:bg-body-dark focus:outline-none focus:ring-2 focus:ring-secondary-light dark:focus:ring-secondary-dark transition-all duration-300 disabled:opacity-90 disabled:cursor-not-allowed
    disabled:hover:bg-gradient-to-br"
      placeholder="Enter a number (1–100)"
    />
  );
};

export default GuessInput;

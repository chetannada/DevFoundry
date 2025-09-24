import { useState } from "react";
import GuessInput from "./GuessInput";
import FeedbackMessage from "./FeedbackMessage";
import ActionButtons from "./ActionButtons";

const GuessNumber = () => {
  const [guess, setGuess] = useState("");
  const [message, setMessage] = useState("");
  const [target, setTarget] = useState(() => Math.floor(Math.random() * 100) + 1);
  const [isCorrect, setIsCorrect] = useState(false);

  const handleGuess = () => {
    const num = parseInt(guess);
    if (isNaN(num) || num < 1 || num > 100) {
      setMessage("Please enter a valid number between 1 and 100");
      return;
    }

    if (num < target) {
      setMessage("Your guess is less than the actual number");
    } else if (num > target) {
      setMessage("Your guess is greater than the actual number");
    } else {
      setMessage("🎉 You guessed it right!");
      setIsCorrect(true);
    }
  };

  const handleReset = () => {
    setTarget(Math.floor(Math.random() * 100) + 1);
    setGuess("");
    setMessage("");
    setIsCorrect(false);
  };

  return (
    <div className="px-6 py-10 w-full max-w-152 mx-auto bg-card-light dark:bg-card-dark border border-border-light dark:border-border-dark rounded-2xl shadow-[#1a202c] dark:shadow-[#f7fafc] shadow-md">
      <h2 className="text-4xl font-medium text-center mb-6">🎯 Guess the Number</h2>
      <GuessInput guess={guess} setGuess={setGuess} disabled={isCorrect} />
      {message && <FeedbackMessage message={message} />}
      <ActionButtons onGuess={handleGuess} onReset={handleReset} disabled={isCorrect} />
    </div>
  );
};

export default GuessNumber;

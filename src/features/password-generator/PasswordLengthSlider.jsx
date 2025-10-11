import { FaMinus, FaPlus } from "react-icons/fa";

const PasswordLengthSlider = ({ length, setLength }) => {
  const MIN = 2;
  const MAX = 50;
  const isDecreased = length <= MIN;
  const isIncreased = length >= MAX;

  const handleChange = e => setLength(Number(e.target.value));
  const decrease = () => setLength(prev => Math.max(MIN, prev - 1));
  const increase = () => setLength(prev => Math.min(MAX, prev + 1));

  return (
    <div className="mt-10 w-full">
      <div className="flex maxSm:flex-wrap items-center gap-4 w-full">
        {/* Label */}
        <label className="whitespace-nowrap text-lg">Password Length: </label>
        <span className="w-12 text-xl font-bold">{length}</span>

        {/* Slider + Buttons */}
        <div className="ml-10 maxSm:ml-0 flex items-center gap-4 w-full">
          <button
            onClick={decrease}
            disabled={isDecreased}
            className={`p-2 rounded-full border border-border-light dark:border-border-dark hover:bg-hover-light dark:hover:bg-hover-dark text-secondary-light dark:text-secondary-dark ${isDecreased ? "opacity-50 cursor-not-allowed" : "transition-all duration-200 ease-in-out active:scale-105 active:translate-y-0.5"}`}
          >
            <FaMinus size={16} />
          </button>

          <input
            type="range"
            min={MIN}
            max={MAX}
            value={length}
            onChange={handleChange}
            className={`w-full cursor-pointer accent-secondary-light dark:accent-secondary-dark`}
          />

          <button
            onClick={increase}
            disabled={isIncreased}
            className={`p-2 rounded-full border border-border-light dark:border-border-dark hover:bg-hover-light dark:hover:bg-hover-dark text-secondary-light dark:text-secondary-dark ${isIncreased ? "opacity-50 cursor-not-allowed" : "transition-all duration-200 ease-in-out active:scale-105 active:translate-y-0.5"}`}
          >
            <FaPlus size={16} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default PasswordLengthSlider;

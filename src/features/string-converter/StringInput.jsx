import { useState } from "react";
import { MdClear } from "react-icons/md";

const InputString = ({ inputText, handleInputChange }) => {
  const [hover, setHover] = useState(false);

  return (
    <div
      className="relative w-full max-w-140 mx-auto"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <input
        type={"text"}
        value={inputText}
        onChange={e => handleInputChange(e)}
        className="w-full pl-4 pr-10 py-2 rounded-md border border-border-light dark:border-border-dark bg-body-light dark:bg-body-dark text-text-light dark:text-text-dark focus:outline-none focus:ring-2 focus:ring-secondary-light dark:focus:ring-secondary-dark transition-all duration-300"
        placeholder="Type something to convert..."
      />

      {(hover || inputText) && (
        <button
          onClick={e => handleInputChange(e, true)}
          className="absolute right-3 top-2.5 text-secondary-light dark:text-secondary-dark"
        >
          <MdClear size={20} />
        </button>
      )}
    </div>
  );
};

export default InputString;

import { useState } from "react";
import { FaCheck, FaRegCopy } from "react-icons/fa";

const WordsFormatCard = ({ title, numberValue, wordValue }) => {
  const [numberCopied, setNumberCopied] = useState(false);
  const [wordCopied, setWordCopied] = useState(false);

  const handleNumberCopy = () => {
    navigator.clipboard.writeText(numberValue);
    setNumberCopied(true);

    setTimeout(() => setNumberCopied(false), 2000);
  };

  const handleWordCopy = () => {
    navigator.clipboard.writeText(wordValue);
    setWordCopied(true);

    setTimeout(() => setWordCopied(false), 2000);
  };

  return (
    <div className="w-full mx-auto p-4 flex flex-col flex-wrap gap-4 animate-fadeIn bg-opacity-50 bg-card-light dark:bg-card-dark border border-border-light dark:border-border-dark rounded-md shadow-[#1a202c] dark:shadow-[#f7fafc] shadow-sm">
      <h4 className="text-sm uppercase tracking-wider">{title}</h4>

      <div className="flex max2xs:flex-wrap items-start gap-3">
        <p
          className={`w-full px-4 py-2 min-h-10 tracking-wider break-words break-all rounded-md border border-border-light dark:border-border-dark bg-body-light dark:bg-body-dark text-text-light dark:text-text-dark focus:outline-none focus:ring-2 focus:ring-secondary-light dark:focus:ring-secondary-dark transition-all duration-300`}
        >
          {numberValue || "\u00A0"}
        </p>
        <button
          onClick={handleNumberCopy}
          disabled={!numberValue}
          className={`flex w-32 max2xs:w-full items-center justify-center gap-2 px-3 py-2.5 rounded-md text-sm transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed
                  ${
                    numberCopied
                      ? "bg-secondary-light text-body-light"
                      : "bg-body-light dark:bg-body-dark text-secondary-light dark:text-secondary-dark border border-border-light dark:border-border-dark hover:bg-hover-light dark:hover:bg-hover-dark"
                  }
                `}
        >
          {numberCopied ? <FaCheck size={14} /> : <FaRegCopy size={16} />}
          <span>{numberCopied ? "Copied" : "Copy"}</span>
        </button>
      </div>

      <div className="flex max2xs:flex-wrap items-start gap-3">
        <p
          className={`w-full px-4 py-2 min-h-10 tracking-wider break-words break-all rounded-md border border-border-light dark:border-border-dark bg-body-light dark:bg-body-dark text-text-light dark:text-text-dark focus:outline-none focus:ring-2 focus:ring-secondary-light dark:focus:ring-secondary-dark transition-all duration-300`}
        >
          {wordValue || "\u00A0"}
        </p>
        <button
          onClick={handleWordCopy}
          disabled={!wordValue}
          className={`flex w-32 max2xs:w-full items-center justify-center gap-2 px-3 py-2.5 rounded-md text-sm transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed
                  ${
                    wordCopied
                      ? "bg-secondary-light text-body-light"
                      : "bg-body-light dark:bg-body-dark text-secondary-light dark:text-secondary-dark border border-border-light dark:border-border-dark hover:bg-hover-light dark:hover:bg-hover-dark"
                  }
                `}
        >
          {wordCopied ? <FaCheck size={14} /> : <FaRegCopy size={16} />}
          <span>{wordCopied ? "Copied" : "Copy"}</span>
        </button>
      </div>
    </div>
  );
};
export default WordsFormatCard;

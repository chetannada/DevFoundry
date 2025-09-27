import { useState } from "react";
import toast from "react-hot-toast";
import { FaCheck, FaRegCopy } from "react-icons/fa";

const CaseVariantCard = ({ title, value }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(value);
    setCopied(true);

    toast.success(`${title} copied to clipboard!`);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="w-full mx-auto p-4 animate-fadeIn bg-opacity-50 bg-card-light dark:bg-card-dark border border-border-light dark:border-border-dark rounded-md shadow-[#1a202c] dark:shadow-[#f7fafc] shadow-sm">
      <h4 className="mb-3 text-sm uppercase tracking-wider">{title}</h4>
      <div className="flex max2xs:flex-wrap items-center gap-3">
        <p
          className={`${!value && "h-10"} w-full px-4 py-2.5 break-words break-all rounded-md border border-border-light dark:border-border-dark bg-body-light dark:bg-body-dark text-text-light dark:text-text-dark focus:outline-none focus:ring-2 focus:ring-secondary-light dark:focus:ring-secondary-dark transition-all duration-300`}
        >
          {value}
        </p>
        <button
          onClick={handleCopy}
          disabled={!value}
          className={`flex w-32 max2xs:w-full items-center justify-center gap-2 px-3 py-2.5 rounded-md text-sm transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed
                  ${
                    copied
                      ? "bg-secondary-light text-body-light"
                      : "bg-body-light dark:bg-body-dark text-secondary-light dark:text-secondary-dark border border-border-light dark:border-border-dark hover:bg-hover-light dark:hover:bg-hover-dark"
                  }
                `}
        >
          {copied ? <FaCheck size={14} /> : <FaRegCopy size={16} />}
          <span>{copied ? "Copied" : "Copy"}</span>
        </button>
      </div>
    </div>
  );
};
export default CaseVariantCard;

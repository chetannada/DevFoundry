import { useState } from "react";
import { FaCheck, FaRegCopy } from "react-icons/fa";

const SummaryOutput = ({ summary, isLoading, retryStatus }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(summary);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  if (isLoading) {
    return (
      <div className="mt-6 p-5 rounded-2xl border border-border-light dark:border-border-dark bg-card-light dark:bg-card-dark animate-pulse">
        {retryStatus && <p className="text-sm text-gray-500 mb-4">{retryStatus.message}</p>}

        <div className="h-3 bg-skeleton-light dark:bg-skeleton-dark rounded w-3/4 mb-3" />
        <div className="h-3 bg-skeleton-light dark:bg-skeleton-dark rounded w-full mb-3" />
        <div className="h-3 bg-skeleton-light dark:bg-skeleton-dark rounded w-5/6" />
      </div>
    );
  }

  if (!summary) return null;

  return (
    <div className="mt-6 p-5 rounded-2xl border border-secondary-light dark:border-secondary-dark bg-card-light dark:bg-card-dark animate-fadeIn relative">
      <div className="flex items-center justify-between mb-4">
        <span className="text-sm font-semibold uppercase tracking-widest text-secondary-light dark:text-secondary-dark">
          Summary
        </span>
        <button
          onClick={handleCopy}
          className="flex items-center gap-1 text-sm hover:text-secondary-light dark:hover:text-secondary-dark transition-colors"
        >
          {copied ? <FaCheck size={14} /> : <FaRegCopy size={14} />}
          <span>{copied ? "Copied" : "Copy"}</span>
        </button>
      </div>
      <p className="text-lg leading-relaxed whitespace-pre-line">{summary}</p>
    </div>
  );
};

export default SummaryOutput;

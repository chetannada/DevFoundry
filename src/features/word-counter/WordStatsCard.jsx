import { MdCloud, MdStorage } from "react-icons/md";

const WordStatsCard = ({ text, cloudMode, setCloudMode }) => {
  const wordCount = text.trim().split(/\s+/).filter(Boolean).length;
  const charCount = text.length;

  return (
    <div className="bg-card-light dark:bg-card-dark border border-border-light dark:border-border-dark shadow-md mt-8 py-3 px-4 w-full max-w-[1200px] transition-all duration-300">
      <div className="flex items-center justify-between flex-wrap gap-3">
        <p className="text-2xl font-medium">
          <span className="text-secondary-light dark:text-secondary-dark font-bold">
            {wordCount}
          </span>{" "}
          words &nbsp;
          <span className="text-secondary-light dark:text-secondary-dark font-bold">
            {charCount}
          </span>{" "}
          characters
        </p>

        <div className="flex items-center gap-2.5">
          <div className="flex items-center gap-1 text-xs tracking-widest uppercase font-medium opacity-70">
            {cloudMode ? (
              <>
                <MdCloud size={14} className="text-secondary-light dark:text-secondary-dark" />
                <span>Cloud Draft</span>
              </>
            ) : (
              <>
                <MdStorage size={14} />
                <span>Local Draft</span>
              </>
            )}
          </div>

          <button
            role="switch"
            aria-checked={cloudMode}
            onClick={() => setCloudMode(!cloudMode)}
            className={`
              relative inline-flex h-5 w-9 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent
              transition-colors duration-200 ease-in-out focus:outline-none
              focus-visible:ring-2 focus-visible:ring-secondary-light dark:focus-visible:ring-secondary-dark focus-visible:ring-offset-1
              ${
                cloudMode
                  ? "bg-secondary-light dark:bg-secondary-dark"
                  : "bg-border-light dark:bg-border-dark"
              }
            `}
            title={cloudMode ? "Switch to Local Draft" : "Switch to Cloud Draft"}
          >
            <span className="sr-only">Toggle cloud draft mode</span>
            <span
              className={`
                pointer-events-none inline-block h-4 w-4 transform rounded-full bg-white shadow-md ring-0
                transition-transform duration-200 ease-in-out
                ${cloudMode ? "translate-x-4" : "translate-x-0"}
              `}
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default WordStatsCard;

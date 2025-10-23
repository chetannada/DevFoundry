import { MdAdd } from "react-icons/md";

const WordStatsCard = ({ text, activeDraftId, setActiveDraftId, drafts, onAddDraft }) => {
  const wordCount = text.trim().split(/\s+/).filter(Boolean).length;
  const charCount = text.length;

  return (
    <div className="bg-card-light dark:bg-card-dark border border-border-light dark:border-border-dark shadow-md mt-8 py-3 px-4 w-full max-w-[1200px] transition-all duration-300">
      <div className="flex items-center justify-between flex-wrap gap-3">
        {/* Word & Character Count */}
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

        {/* Draft Buttons */}
        <div className="flex items-center gap-2 flex-wrap">
          {Object.keys(drafts).map(id => (
            <div key={id} className="flex items-center gap-1">
              <button
                onClick={() => setActiveDraftId(id)}
                className={`px-3 py-1 rounded text-sm font-medium transition ${
                  activeDraftId === id
                    ? "bg-purple-600 text-white"
                    : "bg-gray-800 text-gray-300 hover:bg-gray-700"
                }`}
              >
                Draft {id}
              </button>
            </div>
          ))}

          {Object.keys(drafts).length < 5 && (
            <button
              onClick={onAddDraft}
              className="flex items-center gap-1 px-3 py-1 rounded bg-green-600 text-white text-sm font-medium hover:bg-green-700 transition active:ring-2 active:ring-offset-1 active:ring-secondary-light dark:active:ring-secondary-dark"
            >
              <MdAdd size={16} />
              Add Draft
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default WordStatsCard;

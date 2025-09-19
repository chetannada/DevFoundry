import { KEYWORD_SHORTCUTS } from "../utils/presets";

const KeywordChips = ({ onSelect }) => {
  return (
    <div className="mb-4">
      <h3 className="text-sm font-medium mb-2">Quick Keywords</h3>
      <div className="flex flex-wrap gap-2">
        {KEYWORD_SHORTCUTS.map(keyword => (
          <button
            key={keyword}
            type="button"
            onClick={() => onSelect(keyword)}
            className="px-2.5 py-1 text-sm bg-card-light dark:bg-card-dark border border-border-light dark:border-border-dark rounded-full shadow-card-light dark:shadow-card-dark"
          >
            {keyword}
          </button>
        ))}
      </div>
    </div>
  );
};

export default KeywordChips;

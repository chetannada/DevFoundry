import { ART_STYLES } from "../utils/presets";

const StylePresets = ({ onSelect }) => {
  return (
    <div className="mb-4">
      <h3 className="text-sm font-medium mb-3">Style Presets</h3>
      <div className="grid grid-cols-2 maxMd:grid-cols-3 maxLg:grid-cols-5 gap-2">
        {ART_STYLES.map(style => (
          <button
            key={style.name}
            type="button"
            onClick={() => onSelect(style.prompt)}
            className="p-2 transition-colors text-left group bg-card-light dark:bg-card-dark border border-border-light dark:border-border-dark rounded-md shadow-[#1a202c] dark:shadow-[#f7fafc] shadow-md"
          >
            <h4 className="text-sm font-medium">{style.name}</h4>
            <p className="text-xs text-gray-600 dark:text-gray-400 line-clamp-2">{style.prompt}</p>
          </button>
        ))}
      </div>
    </div>
  );
};

export default StylePresets;

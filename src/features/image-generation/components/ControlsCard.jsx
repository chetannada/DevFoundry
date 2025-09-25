import { useState } from "react";
import { ChevronUpIcon, ChevronDownIcon } from "@heroicons/react/24/solid";
import ProviderSelect from "./ProviderSelect";
import DimensionSelect from "./DimensionSelect";
import StylePresets from "./StylePresets";
import KeywordChips from "./KeywordChips";

const ControlsCard = ({
  prompt,
  count,
  dimensions,
  provider,
  setPrompt,
  setCount,
  setDimensions,
  setProvider,
  onSubmit,
}) => {
  const [isAdvancedOpen, setIsAdvancedOpen] = useState(false);

  const handleKeywordSelect = text => {
    setPrompt(prev => (prev ? `${prev}, ${text}` : text));
  };

  return (
    <div className="p-6 bg-card-light dark:bg-card-dark border border-border-light dark:border-border-dark rounded-2xl shadow-[#1a202c] dark:shadow-[#f7fafc] shadow-md">
      <form onSubmit={onSubmit} className="space-y-6">
        <StylePresets onSelect={handleKeywordSelect} />

        <div>
          <label htmlFor="prompt" className="block text-sm font-medium mb-2">
            Prompt
          </label>
          <textarea
            id="prompt"
            value={prompt}
            onChange={e => setPrompt(e.target.value)}
            className="w-full px-4 py-3 h-32 resize-none rounded-lg bg-card-light dark:bg-card-dark border border-secondary-light dark:border-secondary-dark placeholder:text-gray-400"
            placeholder="A futuristic cityscape at sunset..."
          />
        </div>

        <KeywordChips onSelect={handleKeywordSelect} />

        <button
          type="button"
          onClick={() => setIsAdvancedOpen(!isAdvancedOpen)}
          className="w-full flex items-center justify-start gap-3 text-sm"
        >
          <span>Advanced Settings</span>
          {isAdvancedOpen ? (
            <ChevronUpIcon className="w-5 h-5 text-secondary-light dark:text-secondary-dark" />
          ) : (
            <ChevronDownIcon className="w-5 h-5 text-secondary-light dark:text-secondary-dark" />
          )}
        </button>

        {isAdvancedOpen && (
          <div className="space-y-6 pt-4 border-t border-secondary-light dark:border-secondary-dark">
            <div className="grid grid-cols-1 maxMd:grid-cols-2 gap-6">
              <ProviderSelect value={provider} onChange={setProvider} />
              <DimensionSelect value={dimensions} onChange={setDimensions} />

              <div>
                <label htmlFor="count" className="block text-sm font-medium mb-2">
                  Image Count
                </label>
                <input
                  id="count"
                  type="number"
                  min="1"
                  max="4"
                  value={count}
                  onChange={e => setCount(Math.min(4, Math.max(1, e.target.value)))}
                  className="w-full px-4 py-3 text-sm rounded-lg bg-card-light dark:bg-card-dark border border-secondary-light dark:border-secondary-dark placeholder:text-gray-400"
                />
              </div>
            </div>
          </div>
        )}

        <button
          type="submit"
          className="w-full py-3 px-6 rounded-lg font-medium text-white bg-gradient-to-br from-blue-500 to-blue-800 hover:bg-gradient-to-bl"
        >
          Generate Images
        </button>
      </form>
    </div>
  );
};
export default ControlsCard;

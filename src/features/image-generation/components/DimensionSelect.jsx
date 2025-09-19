import { providers } from "../utils/providers";

const DimensionSelect = ({ value, onChange }) => {
  const currentProvider = providers.find(p => p.id === "flux"); // Simplified for example

  return (
    <div>
      <label htmlFor="dimensions" className="block text-sm font-medium mb-2">
        Dimensions
      </label>
      <div className="relative">
        <select
          id="dimensions"
          value={value}
          onChange={e => onChange(e.target.value)}
          className="appearance-none w-full px-4 py-3 text-sm rounded-lg bg-card-light dark:bg-card-dark border border-secondary-light dark:border-secondary-dark placeholder:text-gray-400"
        >
          {currentProvider.dimensions.map(dim => (
            <option key={dim} value={dim}>
              {dim}
            </option>
          ))}
        </select>
        <div className="absolute inset-y-0 right-3 flex items-center pointer-events-none">
          <svg
            className="w-4 h-4 text-gray-500"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default DimensionSelect;

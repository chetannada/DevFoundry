import { providers } from "../utils/providers";

const ProviderSelect = ({ value, onChange }) => {
  return (
    <div>
      <label htmlFor="provider" className="block text-sm font-medium mb-2">
        AI Model
      </label>
      <div className="relative">
        <select
          id="provider"
          value={value}
          onChange={e => onChange(e.target.value)}
          className="appearance-none w-full px-4 py-3 text-sm rounded-lg bg-card-light dark:bg-card-dark border border-secondary-light dark:border-secondary-dark placeholder:text-gray-400"
        >
          {providers.map(provider => (
            <option key={provider.id} value={provider.id}>
              {provider.label}
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

export default ProviderSelect;

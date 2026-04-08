import toast from "react-hot-toast";

const LocationSearchForm = ({
  city,
  setCity,
  onSearch,
  countries,
  selectedCountry,
  setSelectedCountry,
  cities,
}) => {
  const handleSubmit = e => {
    e.preventDefault();
    if (city.trim() && countries.length > 0 && cities.length > 0) {
      onSearch(city);
    } else {
      toast.error("Please select a country and city before searching.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-wrap items-center justify-center gap-3 mb-6">
      <div className="relative w-48">
        <select
          id="Country"
          value={selectedCountry}
          onChange={e => {
            setSelectedCountry(e.target.value);
            setCity("");
          }}
          className="appearance-none w-full px-4 py-2 rounded-lg border border-border-light dark:border-border-dark 
             bg-card-light dark:bg-card-dark text-text-light dark:text-text-dark 
             focus:outline-none focus:ring-2 focus:ring-secondary-light dark:focus:ring-secondary-dark
             pr-8"
        >
          <option value="">Select country...</option>
          {countries.map(c => (
            <option key={c.code} value={c.code}>
              {c.name}
            </option>
          ))}
        </select>

        <div className="absolute inset-y-0 right-3 flex items-center pointer-events-none">
          <svg
            className="w-4 h-4 text-gray-500 dark:text-gray-300"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </div>

      <div className="relative w-72">
        <select
          value={city}
          onChange={e => setCity(e.target.value)}
          className="appearance-none w-full px-4 py-2 rounded-lg border border-border-light dark:border-border-dark 
                     bg-card-light dark:bg-card-dark text-text-light dark:text-text-dark 
                     focus:outline-none focus:ring-2 focus:ring-secondary-light dark:focus:ring-secondary-dark
                     pr-8"
        >
          <option value="">Select city...</option>
          {cities.map(ct => (
            <option key={ct.id} value={ct.name}>
              {ct.name}
            </option>
          ))}
        </select>

        <div className="absolute inset-y-0 right-3 flex items-center pointer-events-none">
          <svg
            className="w-4 h-4 text-gray-500 dark:text-gray-300"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </div>

      <button
        type="submit"
        className="px-6 py-2 rounded-lg bg-secondary-light dark:bg-secondary-dark 
                   text-white font-semibold hover:bg-secondary-dark transition-transform 
                   duration-200 hover:scale-105 shadow-md"
      >
        Search
      </button>
    </form>
  );
};

export default LocationSearchForm;

import { useState } from "react";

const WeatherSearchBar = ({ city, setCity, onSearch }) => {
  const handleSubmit = e => {
    e.preventDefault();
    if (city.trim()) {
      onSearch(city);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex max3xs:flex-wrap items-center justify-center gap-2 mb-6"
    >
      <input
        type="text"
        value={city}
        onChange={e => setCity(e.target.value)}
        placeholder="Enter city name..."
        className="px-4 py-2 w-72 maxXs:w-44 rounded-lg border border-border-light dark:border-border-dark bg-card-light dark:bg-card-dark text-text-light dark:text-text-dark focus:outline-none focus:ring-2 focus:ring-secondary-light dark:focus:ring-secondary-dark"
      />
      <button
        type="submit"
        className="px-4 py-2 rounded-lg bg-secondary-light dark:bg-secondary-dark text-white hover:bg-secondary-dark transition"
      >
        Search
      </button>
    </form>
  );
};

export default WeatherSearchBar;

import { useState } from "react";
import WeatherSearchBar from "./WeatherSearchBar";
import WeatherCard from "./WeatherCard";
import { fetchWeather } from "../../services/weatherService";
import { FaExclamationTriangle } from "react-icons/fa";

const WeatherCast = () => {
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState("");
  const [city, setCity] = useState("");

  const handleSearch = async city => {
    try {
      setError("");

      const data = await fetchWeather(city);

      setWeather(data);
    } catch (err) {
      setError(err);
      setWeather(null);
    }
  };

  return (
    <div className="px-8 py-10 w-full max-w-180 mx-auto animate-fadeIn bg-opacity-50 bg-card-light dark:bg-card-dark border border-border-light dark:border-border-dark rounded-2xl shadow-[#1a202c] dark:shadow-[#f7fafc] shadow-md">
      <h1 className="text-4xl font-medium text-center mb-8">Weather Cast</h1>
      <WeatherSearchBar city={city} setCity={setCity} onSearch={handleSearch} />

      {error && (
        <div className="mt-10 mb-6 text-center">
          <p className="inline-flex items-center px-6 py-3 bg-red-100 border border-red-400 text-red-700 rounded-xl shadow-md font-semibold">
            <FaExclamationTriangle size={24} className="text-red-600 mr-2" />
            Oops! {error || "City not found. Please try again."}
          </p>
        </div>
      )}

      <WeatherCard weather={weather} />
    </div>
  );
};

export default WeatherCast;

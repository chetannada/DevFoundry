import { useState } from "react";
import WeatherSearchBar from "./WeatherSearchBar";
import WeatherCard from "./WeatherCard";
import { fetchWeather } from "../../services/weatherService";

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
      {error && <p className="text-red-500 mb-4 text-center font-medium">{error}</p>}
      <WeatherCard weather={weather} />
    </div>
  );
};

export default WeatherCast;

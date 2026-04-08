import { useEffect, useState } from "react";
import WeatherCard from "./WeatherCard";
import { fetchCities, fetchCountries, fetchWeather } from "../../services/weatherService";
import { FaExclamationTriangle } from "react-icons/fa";
import LocationSearchForm from "./LocationSearchForm";

const WeatherCast = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState("");
  const [city, setCity] = useState("Mumbai");

  const [countries, setCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState("IN"); // Default India
  const [cities, setCities] = useState([]);
  const [oneSearch, setOneSearch] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadCountries = async () => {
      try {
        const data = await fetchCountries();
        setCountries(data);
      } catch (err) {
        console.error("Error loading countries:", err);
        setLoading(false);
      }
    };
    loadCountries();
  }, []);

  useEffect(() => {
    const loadCities = async () => {
      if (!selectedCountry || countries.length === 0) return;
      try {
        const data = await fetchCities(selectedCountry);
        setCities(data);
      } catch (err) {
        console.error("Error loading cities:", err);
        setLoading(false);
      }
    };
    loadCities();
  }, [selectedCountry, countries]);

  useEffect(() => {
    if (city && cities.length > 0 && !oneSearch) {
      handleSearch(city);
      setOneSearch(true);
    }
  }, [city, cities, oneSearch]);

  const handleSearch = async city => {
    try {
      setError("");
      setLoading(true);

      const data = await fetchWeather(city);
      setWeatherData(data);
    } catch (err) {
      setError(err);
      setWeatherData(null);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="px-8 py-10 w-full max-w-180 mx-auto animate-fadeIn bg-opacity-50 bg-card-light dark:bg-card-dark border border-border-light dark:border-border-dark rounded-2xl shadow-[#1a202c] dark:shadow-[#f7fafc] shadow-md">
      <h1 className="text-4xl font-medium text-center mb-8">Weather Cast</h1>
      <LocationSearchForm
        city={city}
        setCity={setCity}
        countries={countries}
        selectedCountry={selectedCountry}
        setSelectedCountry={setSelectedCountry}
        cities={cities}
        onSearch={handleSearch}
      />

      {error && (
        <div className="mt-10 mb-6 text-center">
          <p className="inline-flex items-center px-6 py-3 bg-red-100 border border-red-400 text-red-700 rounded-xl shadow-md font-semibold">
            <FaExclamationTriangle size={24} className="text-red-600 mr-2" />
            Oops! {error || "City not found. Please try again."}
          </p>
        </div>
      )}

      <WeatherCard weatherData={weatherData} loading={loading} />
    </div>
  );
};

export default WeatherCast;

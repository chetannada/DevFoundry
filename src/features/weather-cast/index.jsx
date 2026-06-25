import { useEffect, useState } from "react";
import WeatherCard from "./WeatherCard";
import { fetchCities, fetchCountries, fetchWeather } from "../../services/weatherService";
import { FaExclamationTriangle } from "react-icons/fa";
import LocationSearchForm from "./LocationSearchForm";

const WeatherCast = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState("");
  const [city, setCity] = useState("Mumbai");

  const [countries, setCountries] = useState([{ name: "India", code: "IN" }]);
  const [selectedCountry, setSelectedCountry] = useState("IN");
  const [cities, setCities] = useState([{ id: 1275339, name: "Mumbai" }]);
  const [oneSearch, setOneSearch] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadCountries = async () => {
      try {
        const data = await fetchCountries();
        setCountries(data);
      } catch (err) {
        const message = err.response?.data?.displayMessage || "Something went wrong!";
        console.error("Error loading countries:", message);
        setError(message);
        setLoading(false);
      }
    };
    loadCountries();
  }, []);

  useEffect(() => {
    const loadCities = async () => {
      try {
        const data = await fetchCities(selectedCountry);
        setCities(data);
      } catch (err) {
        const message = err.response?.data?.displayMessage || "Something went wrong!";
        console.error("Error loading cities:", message);
        setError(message);
        setLoading(false);
      }
    };
    loadCities();
  }, [selectedCountry]);

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
      const message = err.response?.data?.displayMessage || "Something went wrong!";
      console.error("Error:", message);
      setError(message);

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
        setCities={setCities}
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

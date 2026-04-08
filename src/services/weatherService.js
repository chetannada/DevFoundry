import axios from "axios";

const API_KEY = import.meta.env.VITE_API_OPENWEATHER_KEY || "YOUR_OPENWEATHER_API_KEY";
const BASE_URL = "https://api.openweathermap.org/data/2.5/weather";

const GEO_NAMES_USERNAME = import.meta.env.VITE_API_GEONAMES_USERNAME || "YOUR_USERNAME";
const COUNTRIES_URL = "https://restcountries.com/v3.1/all?fields=name,cca2";
const GEO_NAMES_URL = "http://api.geonames.org/searchJSON";

export const fetchWeather = async city => {
  try {
    const response = await axios.get(BASE_URL, {
      params: {
        q: city,
        appid: API_KEY,
        units: "metric",
      },
      withCredentials: false,
    });

    return response.data;
  } catch (error) {
    throw error.response?.data?.message || "Error fetching weather data";
  }
};

export const fetchCountries = async () => {
  try {
    const res = await axios.get(COUNTRIES_URL, { withCredentials: false });
    const data = res.data;

    return data
      .map(c => ({ name: c.name.common, code: c.cca2 }))
      .sort((a, b) => a.name.localeCompare(b.name));
  } catch (error) {
    throw error.response?.data?.message || "Error fetching countries";
  }
};

export const fetchCities = async countryCode => {
  try {
    const res = await axios.get(GEO_NAMES_URL, {
      params: {
        country: countryCode,
        featureClass: "P", // populated places
        maxRows: 1000,
        username: GEO_NAMES_USERNAME,
      },
      withCredentials: false,
    });

    return res.data.geonames.map(c => ({
      id: c.geonameId,
      name: c.name,
    }));
  } catch (error) {
    throw error.response?.data?.message || "Error fetching cities";
  }
};

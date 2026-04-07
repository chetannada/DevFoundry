import axios from "axios";

const API_KEY = import.meta.env.VITE_API_OPENWEATHER_KEY || "YOUR_OPENWEATHER_API_KEY";
const BASE_URL = "https://api.openweathermap.org/data/2.5/weather";

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

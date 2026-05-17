import axios from "axios";

const API_BACKEND_URL = import.meta.env.VITE_API_BACKEND_URL;

export const fetchWeather = async city => {
  try {
    const response = await axios.get(`${API_BACKEND_URL}/weather`, {
      params: {
        city: city,
      },
      withCredentials: false,
    });

    return response.data;
  } catch (error) {
    throw error;
  }
};

export const fetchCountries = async () => {
  try {
    const response = await axios.get(`${API_BACKEND_URL}/weather/countries`, {
      withCredentials: false,
    });
    const data = response.data;

    return data
      .map(c => ({ name: c.name.common, code: c.cca2 }))
      .sort((a, b) => a.name.localeCompare(b.name));
  } catch (error) {
    throw error;
  }
};

export const fetchCities = async countryCode => {
  try {
    const res = await axios.get(`${API_BACKEND_URL}/weather/cities`, {
      params: {
        country: countryCode,
      },
      withCredentials: false,
    });

    return res.data.geonames.map(c => ({
      id: c.geonameId,
      name: c.name,
    }));
  } catch (error) {
    throw error;
  }
};

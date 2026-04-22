import axios from "axios";
const API_BACKEND_URL = import.meta.env.VITE_API_BACKEND_URL;

export const summarizeText = async payload => {
  try {
    const response = await axios.post(`${API_BACKEND_URL}/ai/summarize`, payload, {
      withCredentials: false,
    });

    return response.data.summary;
  } catch (error) {
    throw error;
  }
};

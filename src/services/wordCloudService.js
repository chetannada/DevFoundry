import axios from "axios";

const API_BACKEND_URL = import.meta.env.VITE_API_BACKEND_URL;

export const getWordCounterDraft = async () => {
  try {
    const response = await axios.get(`${API_BACKEND_URL}/word-counter/get-draft`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const updateWordCounterDraft = async content => {
  try {
    const response = await axios.put(`${API_BACKEND_URL}/word-counter/update-draft`, {
      content,
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const deleteWordCounterDraft = async () => {
  try {
    const response = await axios.delete(`${API_BACKEND_URL}/word-counter/delete-draft`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

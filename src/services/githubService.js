import axios from "axios";

const API_BACKEND_URL = import.meta.env.VITE_API_BACKEND_URL;

export const fetchGithubRepos = async (visibility, affiliation, pageSize) => {
  const queryParams = new URLSearchParams();
  if (visibility) queryParams.append("visibility", visibility);
  if (affiliation) queryParams.append("affiliation", affiliation);
  if (pageSize) queryParams.append("pageSize", pageSize);

  try {
    const response = await axios.get(
      `${API_BACKEND_URL}/github/repos${
        queryParams.toString() ? `?${queryParams.toString()}` : ""
      }`,
      {
        withCredentials: true,
      }
    );

    return response.data;
  } catch (error) {
    throw error;
  }
};

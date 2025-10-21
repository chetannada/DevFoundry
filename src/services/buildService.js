import axios from "axios";

const API_BACKEND_URL = import.meta.env.VITE_API_BACKEND_URL;

export const fetchGalleryBuilds = async (
  search = { query: "", field: "title" },
  contributorId = null,
  activeTab,
  filters = {}
) => {
  const queryParams = new URLSearchParams();
  const { query, field } = search;

  const fieldMap = {
    title: "title",
    techStack: "techStack",
    contributedBy: "contributorName",
  };

  const paramKey = fieldMap[field] || "title";

  if (query) queryParams.append(paramKey, query);
  if (contributorId) queryParams.append("contributorId", contributorId);
  if (activeTab) queryParams.append("type", activeTab);

  Object.entries(filters).forEach(([key, value]) => {
    if (value !== undefined && value !== null) {
      queryParams.append(key, value);
    }
  });

  try {
    const response = await axios.get(
      `${API_BACKEND_URL}/builds/get${queryParams.toString() ? `?${queryParams.toString()}` : ""}`
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const submitBuildToGallery = async (buildData, activeTab) => {
  const queryParams = new URLSearchParams();
  if (activeTab) queryParams.append("type", activeTab);

  try {
    const response = await axios.post(
      `${API_BACKEND_URL}/builds/add${queryParams.toString() ? `?${queryParams.toString()}` : ""}`,
      buildData
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const removeBuildFromGallery = async (buildId, payload, activeTab) => {
  const queryParams = new URLSearchParams();
  if (activeTab) queryParams.append("type", activeTab);

  try {
    const response = await axios.delete(
      `${API_BACKEND_URL}/builds/delete/${buildId}${
        queryParams.toString() ? `?${queryParams.toString()}` : ""
      }`,
      {
        data: payload,
      }
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const editGalleryBuild = async (buildId, updatedData, activeTab) => {
  const queryParams = new URLSearchParams();
  if (activeTab) queryParams.append("type", activeTab);

  try {
    const response = await axios.put(
      `${API_BACKEND_URL}/builds/update/${buildId}${
        queryParams.toString() ? `?${queryParams.toString()}` : ""
      }`,
      updatedData
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const reviewGalleryBuild = async (buildId, reviewedData, activeTab) => {
  const queryParams = new URLSearchParams();
  if (activeTab) queryParams.append("type", activeTab);

  try {
    const response = await axios.put(
      `${API_BACKEND_URL}/builds/review/${buildId}?${queryParams.toString()}`,
      reviewedData,
      {
        withCredentials: true,
      }
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const restoreGalleryBuild = async (buildId, restoredData, activeTab) => {
  const queryParams = new URLSearchParams();
  if (activeTab) queryParams.append("type", activeTab);

  try {
    const response = await axios.put(
      `${API_BACKEND_URL}/builds/restore/${buildId}?${queryParams.toString()}`,
      restoredData,
      {
        withCredentials: true,
      }
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const toggleFavoriteGalleryBuild = async (buildId, buildType) => {
  try {
    const response = await axios.post(`${API_BACKEND_URL}/builds/favorites/${buildId}`, buildType, {
      withCredentials: true,
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};

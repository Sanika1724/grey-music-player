import axios from "axios";

const apiClient = axios.create({
  baseURL: "https://api.spotify.com/v1/",
});

// ✅ attach token to EVERY request
apiClient.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");

  if (token) {
    config.headers.Authorization = "Bearer " + token;
  }

  return config;
});

export default apiClient;

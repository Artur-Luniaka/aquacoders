import axios from "axios";

const aqua = axios.create({
  baseURL: "https://aquacoders.onrender.com",
  withCredentials: true,
});

export const refreshToken = async () => {
  try {
    const response = await aqua.post("/users/refresh");
    const { accessToken } = response.data.data;
    return accessToken;
  } catch (error) {
    console.error("Не вдалося оновити токен", error);
    throw error;
  }
};

let isRefreshing = false;
let refreshPromise = null;

aqua.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    if (error.response && error.response.status === 401) {
      if (!isRefreshing) {
        isRefreshing = true;
        refreshPromise = refreshToken()
          .then((newAccessToken) => {
            if (!newAccessToken) throw new Error("Оновлений токен відсутній");
            aqua.defaults.headers["Authorization"] = `Bearer ${newAccessToken}`;
            return newAccessToken;
          })
          .catch((err) => {
            console.error("Помилка оновлення токена:", err);
            throw err;
          })
          .finally(() => {
            isRefreshing = false;
          });
      }

      try {
        const newAccessToken = await refreshPromise;
        if (!newAccessToken) {
          return Promise.reject(error);
        }

        originalRequest.headers["Authorization"] = `Bearer ${newAccessToken}`;
        const retryResponse = await aqua(originalRequest);
        if (retryResponse.status === 401) {
          return Promise.reject(retryResponse);
        }
        return retryResponse;
      } catch (refreshError) {
        return Promise.reject(refreshError);
      }
    }
    return Promise.reject(error);
  }
);
export default aqua;

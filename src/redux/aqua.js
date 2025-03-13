import axios from "axios";
import { logOut } from "./auth/operations/logOutThunk";
import { store } from "./store";
import { refreshAccessToken } from "./auth/operations/refreshAccessToken";

const aqua = axios.create({
  baseURL: "https://aquacoders.onrender.com",
});

aqua.interceptors.request.use((config) => {
  const token = store.getState().auth.token;
  if (token) {
    config.headers["Authorization"] = `Bearer ${token}`;
  }
  return config;
});

let isRefreshing = false;
let refreshPromise = null;

aqua.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      if (!isRefreshing) {
        isRefreshing = true;
        refreshPromise = store
          .dispatch(refreshAccessToken())
          .unwrap()
          .then((newAccessToken) => {
            if (!newAccessToken?.accessToken)
              throw new Error("Access token undefined");

            aqua.defaults.headers.Authorization = `Bearer ${newAccessToken?.accessToken}`;

            return newAccessToken?.accessToken;
          })
          .catch((err) => {
            console.error("Mistake refresh token", err);
            store.dispatch(logOut());
            return null;
          })
          .finally(() => {
            isRefreshing = false;
          });
      }

      const newAccessToken = await refreshPromise;
      if (!newAccessToken) return Promise.reject(error);

      return aqua(originalRequest);
    }

    return Promise.reject(error);
  }
);
export default aqua;

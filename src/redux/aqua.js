import axios from "axios";
import { logOut } from "./auth/operations/logOutThunk";
import { store } from "./store";
import { refreshAccessToken } from "./auth/operations/refreshAccessToken";

const aqua = axios.create({
  baseURL: "/*https://aquacoders.onrender.com*/http://localhost:3000",
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
          .catch((e) => {
            e;
            store.dispatch(logOut());
            return null;
          })
          .finally(() => {
            isRefreshing = false;
          });
      }

      const newAccessToken = await Promise.race([
        refreshPromise,
        new Promise((_, reject) =>
          setTimeout(() => reject(new Error("Timeout refresh token!")), 5000)
        ),
      ]).catch(() => null);

      if (!newAccessToken) return Promise.reject(error);

      return aqua(originalRequest);
    }

    return Promise.reject(error);
  }
);
export default aqua;

import axios from "axios";
import Cookies from "js-cookie";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || process.env.BASE_URL;

const api = axios.create({
  baseURL: BASE_URL,
});

api.interceptors.request.use((config) => {
  const token = Cookies.get("accessToken");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

let refreshPromise = null;

api.interceptors.response.use(
  (res) => res,
  async (err) => {
    const originalRequest = err.config;

    if (!err.response) {
      return Promise.reject(err);
    }

    const status = err.response.status;

    if (status >= 500) {
      window.location.href = "/500";
      return Promise.reject(err);
    }

    if ((status === 401 || status === 403) && !originalRequest._retry) {
      originalRequest._retry = true;

      const refreshToken = Cookies.get("refreshToken");

      if (!refreshToken) {
        Cookies.remove("accessToken");
        Cookies.remove("refreshToken");
        return Promise.reject(err);
      }

      if (!refreshPromise) {
        refreshPromise = axios
          .post(`${BASE_URL}/auth/refresh-token`, { refreshToken })
          .then(({ data }) => {
            const newToken = data.accessToken;
            Cookies.set("accessToken", newToken, {
              expires: 30,
              secure: true,
              sameSite: "strict",
            });
            return newToken;
          })
          .catch((err) => {
            Cookies.remove("accessToken");
            Cookies.remove("refreshToken");
            return Promise.reject(err);
          })
          .finally(() => {
            refreshPromise = null;
          });
      }
      try {
        const newToken = await refreshPromise;
        originalRequest.headers.Authorization = `Bearer ${newToken}`;
        return api(originalRequest);
      } catch (refreshError) {
        return Promise.reject(refreshError);
      }
    }
    return Promise.reject(err);
  }
);

export default api;

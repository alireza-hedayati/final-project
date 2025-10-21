import axios from "axios";
import Cookies from "js-cookie";

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL || process.env.BASE_URL,
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
    console.log(err)
    const originalRequest = err.config;
    if (!err.response) {
      return Promise.reject(error);
    }
    const status = err.response.status;
    if (status >= 500) {
      window.location.href = "/500";
      return Promise.reject(err);
    }
    if (status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      if (!refreshPromise) {
        refreshPromise = api
          .post("/auth/refresh-token", {}, { withCredentials: true })
          .then(({ data }) => {
            const newToken = data.accessToken;
            Cookies.set("accessToken", data.accessToken, {
              expires: 30,
              secure: true,
              sameSite: "Strict",
            });
            return newToken;
          })
          .catch((err) => {
            Cookies.remove("accessToken");
            window.location.href = "/torino";
            throw err;
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

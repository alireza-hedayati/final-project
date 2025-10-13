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
    const originalRequest = err.config;
    if (err.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      if(!refreshPromise){
        refreshPromise = api.post('/auth/refresh-token', {},{withCredentials: true}).then(({data}) => {
          Cookies.set("accessToken",data.accessToken,{
            expires:30,
            secure:true,
            sameSite:'Strict'
          })
          return data.accessToken
        }).catch(e=>{
          Cookies.remove("accessToken");
          window.location.href = "/torino";
          throw e;
        }).finally(()=>{refreshPromise = null})

      }
      const newToken = await refreshPromise;
      originalRequest.headers.Authorization = `Bearer ${newToken}`;
      return api(originalRequest);
    }
    return Promise.reject(err);
  }
);

export default api;

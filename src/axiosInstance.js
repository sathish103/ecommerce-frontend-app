// src/axiosInstance.js

import axios from "axios";
import config from "./config";

const axiosInstance = axios.create({
  baseURL: config.BASE_API_URL,
});

// Attach token (if any) to every request
axiosInstance.interceptors.request.use(
  (req) => {
    const token = localStorage.getItem("token");
    if (token) {
      req.headers.Authorization = `Bearer ${token}`;
    }
    return req;
  },
  (err) => Promise.reject(err)
);

export default axiosInstance;

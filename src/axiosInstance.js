// src/axiosInstance.js

import axios from "axios";
import BASE_API_URL from "./config";

const axiosInstance = axios.create({
  baseURL: BASE_API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// Attach JWT token from localStorage if present
axiosInstance.interceptors.request.use(
  (req) => {
    const token = localStorage.getItem("token");
    if (token) {
      req.headers.Authorization = `Bearer ${token}`;
    }
    return req;
  },
  (error) => Promise.reject(error)
);

export default axiosInstance;

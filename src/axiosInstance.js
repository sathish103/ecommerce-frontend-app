// src/axiosInstance.js

import axios from "axios";
import { BASE_API_URL } from "./config";

const axiosInstance = axios.create({
  baseURL: BASE_API_URL,
});

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

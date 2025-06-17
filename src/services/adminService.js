// src/services/authService.js

import axios from "../axiosInstance";

// Login API call
export const loginUser = async (email, password) => {
  try {
    const response = await axios.post("/users/login", {
      email,
      password,
    });

    // Assuming backend returns a JWT and user info
    return response.data; // { token, user }
  } catch (error) {
    throw new Error(error.response?.data?.message || "Login failed");
  }
};

// Register API (optional, if you implement user registration)
export const registerUser = async (name, email, password) => {
  try {
    const response = await axios.post("/users/register", {
      name,
      email,
      password,
    });

    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || "Registration failed");
  }
};

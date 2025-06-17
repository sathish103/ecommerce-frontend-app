// src/services/userService.js

import axios from "../axiosInstance";

// Get current user's profile
export const getUserProfile = async () => {
  try {
    const response = await axios.get("/users/profile"); // Assumes JWT is in headers
    return response.data;
  } catch (error) {
    throw new Error("Failed to fetch user profile");
  }
};

// Update user profile (optional)
export const updateUserProfile = async (updatedData) => {
  try {
    const response = await axios.put("/users/profile", updatedData);
    return response.data;
  } catch (error) {
    throw new Error("Failed to update user profile");
  }
};

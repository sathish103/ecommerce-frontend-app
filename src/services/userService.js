// src/services/userService.js

import axios from "../axiosInstance";

const userService = {
  getUserProfile: async () => {
    try {
      const response = await axios.get("/users/profile"); // Assumes JWT in headers
      return response.data;
    } catch (error) {
      throw new Error("Failed to fetch user profile");
    }
  },

  updateUserProfile: async (updatedData) => {
    try {
      const response = await axios.put("/users/profile", updatedData);
      return response.data;
    } catch (error) {
      throw new Error("Failed to update user profile");
    }
  },
};

export default userService;

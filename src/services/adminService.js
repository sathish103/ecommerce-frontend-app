// src/services/adminService.js

import axios from "../axiosInstance";

const adminService = {
  register: async ({ email, password, name }) => {
    try {
      const response = await axios.post("/users/register", {
        email,
        password,
        name,
      });
      return response.data;
    } catch (error) {
      throw new Error("Registration failed");
    }
  },

  login: async ({ email, password }) => {
    try {
      const response = await axios.post("/users/login", {
        email,
        password,
      });
      return response.data;
    } catch (error) {
      throw new Error("Login failed");
    }
  },
};

export default adminService;

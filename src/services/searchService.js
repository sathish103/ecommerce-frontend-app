// src/services/searchService.js

import axios from "../axiosInstance";

const searchService = {
  searchProducts: async (query) => {
    try {
      const response = await axios.get(`/search?keyword=${encodeURIComponent(query)}`);
      return response.data;
    } catch (error) {
      throw new Error("Failed to search products");
    }
  },
};

export default searchService;

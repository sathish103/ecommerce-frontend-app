// src/services/searchService.js

import axios from "../axiosInstance";

// Search products by keyword
export const searchProducts = async (query) => {
  try {
    const response = await axios.get(`/search?keyword=${encodeURIComponent(query)}`);
    return response.data;
  } catch (error) {
    throw new Error("Failed to search products");
  }
};

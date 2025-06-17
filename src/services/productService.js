// src/services/productService.js

import axios from "../axiosInstance";

const productService = {
  getAllProducts: async () => {
    try {
      const response = await axios.get("/products");
      return response.data;
    } catch (error) {
      throw new Error("Failed to fetch products");
    }
  },

  getProductById: async (productId) => {
    try {
      const response = await axios.get(`/products/${productId}`);
      return response.data;
    } catch (error) {
      throw new Error("Failed to fetch product details");
    }
  },
};

export default productService;

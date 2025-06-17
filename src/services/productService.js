// src/services/productService.js

import axios from "../axiosInstance";

// Get all products
export const fetchAllProducts = async () => {
  try {
    const response = await axios.get("/products");
    return response.data;
  } catch (error) {
    throw new Error("Failed to fetch products");
  }
};

// Get a single product by ID
export const fetchProductById = async (productId) => {
  try {
    const response = await axios.get(`/products/${productId}`);
    return response.data;
  } catch (error) {
    throw new Error("Failed to fetch product details");
  }
};

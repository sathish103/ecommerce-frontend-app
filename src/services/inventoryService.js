// src/services/inventoryService.js

import axios from "../axiosInstance";

// Get inventory info for a specific product
export const getInventoryByProductId = async (productId) => {
  try {
    const response = await axios.get(`/inventory/${productId}`);
    return response.data;
  } catch (error) {
    throw new Error("Failed to fetch inventory details");
  }
};

// Update inventory after order placed (optional, if handled on frontend)
export const updateInventory = async (productId, quantity) => {
  try {
    const response = await axios.put(`/inventory/${productId}`, {
      quantity,
    });
    return response.data;
  } catch (error) {
    throw new Error("Failed to update inventory");
  }
};

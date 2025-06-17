// src/services/inventoryService.js

import axios from "../axiosInstance";

const inventoryService = {
  getInventoryByProductId: async (productId) => {
    try {
      const response = await axios.get(`/inventory/${productId}`);
      return response.data;
    } catch (error) {
      throw new Error("Failed to fetch inventory details");
    }
  },

  updateInventory: async (productId, quantity) => {
    try {
      const response = await axios.put(`/inventory/${productId}`, {
        quantity,
      });
      return response.data;
    } catch (error) {
      throw new Error("Failed to update inventory");
    }
  },
};

export default inventoryService;

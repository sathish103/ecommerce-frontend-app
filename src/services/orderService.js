// src/services/orderService.js

import axios from "../axiosInstance";

const orderService = {
  getUserOrders: async (userId) => {
    try {
      const response = await axios.get(`/orders/user/${userId}`);
      return response.data;
    } catch (error) {
      throw new Error("Failed to fetch user orders");
    }
  },

  placeOrder: async (orderData) => {
    try {
      const response = await axios.post("/orders", orderData);
      return response.data;
    } catch (error) {
      throw new Error("Failed to place order");
    }
  },

  getOrderById: async (orderId) => {
    try {
      const response = await axios.get(`/orders/${orderId}`);
      return response.data;
    } catch (error) {
      throw new Error("Failed to fetch order");
    }
  },
};

export default orderService;

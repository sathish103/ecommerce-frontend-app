// src/services/orderService.js

import axios from "../axiosInstance";

// Get all orders for a user
export const getUserOrders = async (userId) => {
  try {
    const response = await axios.get(`/orders/user/${userId}`);
    return response.data;
  } catch (error) {
    throw new Error("Failed to fetch user orders");
  }
};

// Place a new order
export const placeOrder = async (orderData) => {
  try {
    const response = await axios.post("/orders", orderData);
    return response.data;
  } catch (error) {
    throw new Error("Failed to place order");
  }
};

// Get order by ID
export const getOrderById = async (orderId) => {
  try {
    const response = await axios.get(`/orders/${orderId}`);
    return response.data;
  } catch (error) {
    throw new Error("Failed to fetch order");
  }
};

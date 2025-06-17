// src/services/cartService.js

import axios from "../axiosInstance";

// Get cart for a user
export const getCart = async (userId) => {
  try {
    const response = await axios.get(`/cart/${userId}`);
    return response.data;
  } catch (error) {
    throw new Error("Failed to fetch cart");
  }
};

// Add item to cart
export const addToCart = async (userId, productId, quantity) => {
  try {
    const response = await axios.post(`/cart/${userId}/items`, {
      productId,
      quantity,
    });
    return response.data;
  } catch (error) {
    throw new Error("Failed to add item to cart");
  }
};

// Remove item from cart
export const removeFromCart = async (userId, itemId) => {
  try {
    const response = await axios.delete(`/cart/${userId}/items/${itemId}`);
    return response.data;
  } catch (error) {
    throw new Error("Failed to remove item from cart");
  }
};

// Update item quantity in cart
export const updateCartItem = async (userId, itemId, quantity) => {
  try {
    const response = await axios.put(`/cart/${userId}/items/${itemId}`, {
      quantity,
    });
    return response.data;
  } catch (error) {
    throw new Error("Failed to update cart item");
  }
};

// src/config.js

const BASE_API_URL = import.meta.env.VITE_API_BASE_URL || "https://api.devopscicd.xyz";

const API_ENDPOINTS = {
  USERS: `${BASE_API_URL}/users`,
  PRODUCTS: `${BASE_API_URL}/products`,
  ORDERS: `${BASE_API_URL}/orders`,
  CART: `${BASE_API_URL}/cart`,
  PAYMENTS: `${BASE_API_URL}/payments`,
  INVENTORY: `${BASE_API_URL}/inventory`,
  NOTIFICATIONS: `${BASE_API_URL}/notifications`,
  REVIEWS: `${BASE_API_URL}/reviews`,
  ADMIN: `${BASE_API_URL}/admin`,
  DISCOUNTS: `${BASE_API_URL}/discounts`,
  SEARCH: `${BASE_API_URL}/search`,
};

export { BASE_API_URL, API_ENDPOINTS };

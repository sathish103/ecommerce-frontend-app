// src/services/reviewService.js

import axios from "../axiosInstance";

// Get all reviews for a specific product
export const getReviewsByProductId = async (productId) => {
  try {
    const response = await axios.get(`/reviews/product/${productId}`);
    return response.data;
  } catch (error) {
    throw new Error("Failed to fetch reviews");
  }
};

// Submit a new review for a product
export const submitReview = async (reviewData) => {
  try {
    const response = await axios.post("/reviews", reviewData);
    return response.data;
  } catch (error) {
    throw new Error("Failed to submit review");
  }
};

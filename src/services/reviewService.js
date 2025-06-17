// src/services/reviewService.js

import axios from "../axiosInstance";

const reviewService = {
  getReviewsByProductId: async (productId) => {
    try {
      const response = await axios.get(`/reviews/product/${productId}`);
      return response.data;
    } catch (error) {
      throw new Error("Failed to fetch reviews");
    }
  },

  submitReview: async (reviewData) => {
    try {
      const response = await axios.post("/reviews", reviewData);
      return response.data;
    } catch (error) {
      throw new Error("Failed to submit review");
    }
  },
};

export default reviewService;

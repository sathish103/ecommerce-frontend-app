// src/services/discountService.js

import axios from "../axiosInstance";

const discountService = {
  getAllDiscounts: async () => {
    try {
      const response = await axios.get("/discounts");
      return response.data;
    } catch (error) {
      throw new Error("Failed to fetch discounts");
    }
  },

  applyDiscountCode: async (code, userId) => {
    try {
      const response = await axios.post("/discounts/apply", {
        code,
        userId,
      });
      return response.data;
    } catch (error) {
      throw new Error("Invalid or expired discount code");
    }
  },
};

export default discountService;

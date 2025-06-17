// src/services/paymentService.js

import axios from "../axiosInstance";

const paymentService = {
  processPayment: async (paymentData) => {
    try {
      const response = await axios.post("/payments", paymentData);
      return response.data;
    } catch (error) {
      throw new Error("Payment processing failed");
    }
  },

  getPaymentById: async (paymentId) => {
    try {
      const response = await axios.get(`/payments/${paymentId}`);
      return response.data;
    } catch (error) {
      throw new Error("Failed to retrieve payment details");
    }
  },
};

export default paymentService;

// src/services/notificationService.js

import axios from "../axiosInstance";

const notificationService = {
  getUserNotifications: async (userId) => {
    try {
      const response = await axios.get(`/notifications/user/${userId}`);
      return response.data;
    } catch (error) {
      throw new Error("Failed to fetch notifications");
    }
  },

  markAsRead: async (notificationId) => {
    try {
      const response = await axios.put(`/notifications/${notificationId}/read`);
      return response.data;
    } catch (error) {
      throw new Error("Failed to mark notification as read");
    }
  },
};

export default notificationService;

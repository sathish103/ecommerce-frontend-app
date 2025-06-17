// src/services/notificationService.js

import axios from "../axiosInstance";

// Get notifications for a user
export const getUserNotifications = async (userId) => {
  try {
    const response = await axios.get(`/notifications/user/${userId}`);
    return response.data;
  } catch (error) {
    throw new Error("Failed to fetch notifications");
  }
};

// Mark notification as read
export const markAsRead = async (notificationId) => {
  try {
    const response = await axios.put(`/notifications/${notificationId}/read`);
    return response.data;
  } catch (error) {
    throw new Error("Failed to mark notification as read");
  }
};

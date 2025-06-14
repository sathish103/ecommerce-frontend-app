import axios from '../axiosInstance';
import { NOTIFICATION_API } from '../config';

export const getNotifications = () => axios.get(`${NOTIFICATION_API}/notifications`);
export const markAsRead = (notificationId) =>
  axios.post(`${NOTIFICATION_API}/notifications/${notificationId}/read`);

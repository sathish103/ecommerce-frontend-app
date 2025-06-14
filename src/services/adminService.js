import axios from '../axiosInstance';
import { ADMIN_API } from '../config';

export const getAllUsers = () => axios.get(`${ADMIN_API}/users`);
export const deleteUser = (userId) => axios.delete(`${ADMIN_API}/users/${userId}`);
export const getAdminDashboard = () => axios.get(`${ADMIN_API}/dashboard`);

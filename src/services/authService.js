import axios from '../axiosInstance';
import { AUTH_API } from '../config';

export const loginUser = (credentials) => axios.post(`${AUTH_API}/login`, credentials);
export const registerUser = (data) => axios.post(`${AUTH_API}/register`, data);
export const getUserProfile = () => axios.get(`${AUTH_API}/profile`);

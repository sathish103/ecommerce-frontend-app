import axios from '../axiosInstance';
import { ORDER_API } from '../config';

export const placeOrder = (orderData) => axios.post(`${ORDER_API}/orders`, orderData);
export const getUserOrders = () => axios.get(`${ORDER_API}/orders`);
export const getOrderById = (id) => axios.get(`${ORDER_API}/orders/${id}`);

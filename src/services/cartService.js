import axios from '../axiosInstance';
import { CART_API } from '../config';

export const getCart = () => axios.get(`${CART_API}/cart`);
export const addToCart = (item) => axios.post(`${CART_API}/cart/add`, item);
export const removeFromCart = (productId) => axios.delete(`${CART_API}/cart/remove/${productId}`);
export const clearCart = () => axios.post(`${CART_API}/cart/clear`);

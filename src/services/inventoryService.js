import axios from '../axiosInstance';
import { INVENTORY_API } from '../config';

export const getInventory = () => axios.get(`${INVENTORY_API}/inventory`);
export const updateStock = (productId, data) =>
  axios.put(`${INVENTORY_API}/inventory/${productId}`, data);

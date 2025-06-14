import axios from '../axiosInstance';
import { DISCOUNT_API } from '../config';

export const getAllDiscounts = () => axios.get(`${DISCOUNT_API}/discounts`);
export const addDiscount = (data) => axios.post(`${DISCOUNT_API}/discounts`, data);
export const deleteDiscount = (id) => axios.delete(`${DISCOUNT_API}/discounts/${id}`);

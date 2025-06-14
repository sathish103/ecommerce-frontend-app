import axios from '../axiosInstance';
import { PRODUCT_API } from '../config';

export const getAllProducts = () => axios.get(`${PRODUCT_API}/products`);
export const getProductById = (id) => axios.get(`${PRODUCT_API}/products/${id}`);
export const addProduct = (data) => axios.post(`${PRODUCT_API}/products`, data);
export const updateProduct = (id, data) => axios.put(`${PRODUCT_API}/products/${id}`, data);
export const deleteProduct = (id) => axios.delete(`${PRODUCT_API}/products/${id}`);

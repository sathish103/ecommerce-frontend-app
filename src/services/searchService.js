import axios from '../axiosInstance';
import { SEARCH_API } from '../config';

export const searchProducts = (query) => axios.get(`${SEARCH_API}/search?q=${query}`);

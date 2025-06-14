import axios from '../axiosInstance';
import { REVIEW_API } from '../config';

export const getReviewsByProduct = (productId) =>
  axios.get(`${REVIEW_API}/reviews/product/${productId}`);
export const addReview = (reviewData) => axios.post(`${REVIEW_API}/reviews`, reviewData);

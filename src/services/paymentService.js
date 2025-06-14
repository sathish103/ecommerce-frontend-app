import axios from '../axiosInstance';
import { PAYMENT_API } from '../config';

export const makePayment = (paymentData) => axios.post(`${PAYMENT_API}/payment`, paymentData);
export const getPaymentStatus = (paymentId) => axios.get(`${PAYMENT_API}/payment/status/${paymentId}`);

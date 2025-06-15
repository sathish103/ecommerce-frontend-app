// API Gateway base URL from .env
const BASE_URL = process.env.REACT_APP_API_BASE_URL;

// Microservice Endpoints via API Gateway
export const USER_API         = `${BASE_URL}/users`;
export const PRODUCT_API      = `${BASE_URL}/products`;
export const ORDER_API        = `${BASE_URL}/orders`;
export const CART_API         = `${BASE_URL}/cart`;
export const PAYMENT_API      = `${BASE_URL}/payments`;
export const INVENTORY_API    = `${BASE_URL}/inventory`;
export const NOTIFICATION_API = `${BASE_URL}/notifications`;
export const REVIEW_API       = `${BASE_URL}/reviews`;
export const ADMIN_API        = `${BASE_URL}/admin`;
export const DISCOUNT_API     = `${BASE_URL}/discounts`;
export const SEARCH_API       = `${BASE_URL}/search`;

// AWS Cognito Configuration
export const COGNITO_CONFIG = {
  region: process.env.REACT_APP_COGNITO_REGION,
  userPoolId: process.env.REACT_APP_COGNITO_USER_POOL_ID,
  userPoolWebClientId: process.env.REACT_APP_COGNITO_APP_CLIENT_ID,
};

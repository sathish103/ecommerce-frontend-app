// API Gateway base URLs (example values – replace with your real API Gateway endpoints)
export const AUTH_API = 'https://api.example.com/auth';
export const PRODUCT_API = 'https://api.example.com/products';
export const ORDER_API = 'https://api.example.com/orders';
export const CART_API = 'https://api.example.com/cart';
export const PAYMENT_API = 'https://api.example.com/payment';
export const INVENTORY_API = 'https://api.example.com/inventory';
export const NOTIFICATION_API = 'https://api.example.com/notifications';
export const REVIEW_API = 'https://api.example.com/reviews';
export const ADMIN_API = 'https://api.example.com/admin';
export const DISCOUNT_API = 'https://api.example.com/discounts';
export const SEARCH_API = 'https://api.example.com/search';

// AWS Cognito Configuration
export const COGNITO_CONFIG = {
  region: process.env.REACT_APP_COGNITO_REGION,
  userPoolId: process.env.REACT_APP_COGNITO_USER_POOL_ID,
  userPoolWebClientId: process.env.REACT_APP_COGNITO_APP_CLIENT_ID,
};

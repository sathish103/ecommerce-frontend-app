// src/services/apiService.js

import config from '../config';

const getToken = () => {
  return localStorage.getItem(config.JWT_STORAGE_KEY);
};

const getHeaders = (isJson = true) => {
  const headers = {};
  const token = getToken();

  if (isJson) {
    headers['Content-Type'] = 'application/json';
  }
  if (token) {
    headers['Authorization'] = `Bearer ${token}`;
  }

  return headers;
};

const api = {
  get: async (path) => {
    const res = await fetch(`${config.API_BASE_URL}${path}`, {
      method: 'GET',
      headers: getHeaders(),
    });
    return res.json();
  },

  post: async (path, data) => {
    const res = await fetch(`${config.API_BASE_URL}${path}`, {
      method: 'POST',
      headers: getHeaders(),
      body: JSON.stringify(data),
    });
    return res.json();
  },

  put: async (path, data) => {
    const res = await fetch(`${config.API_BASE_URL}${path}`, {
      method: 'PUT',
      headers: getHeaders(),
      body: JSON.stringify(data),
    });
    return res.json();
  },

  del: async (path) => {
    const res = await fetch(`${config.API_BASE_URL}${path}`, {
      method: 'DELETE',
      headers: getHeaders(),
    });
    return res.json();
  },
};

export default api;

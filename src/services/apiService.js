// src/services/apiService.js

import config from '../config';

const getToken = () => {
  return localStorage.getItem('token'); // 👈 match your AuthContext usage
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

const handleResponse = async (res) => {
  const contentType = res.headers.get('content-type');
  const isJson = contentType && contentType.includes('application/json');
  const data = isJson ? await res.json() : null;

  if (!res.ok) {
    const message = data?.message || res.statusText || 'Request failed';
    throw new Error(message);
  }

  return data;
};

const api = {
  get: async (path) => {
    const res = await fetch(`${config.API_BASE_URL}${path}`, {
      method: 'GET',
      headers: getHeaders(),
    });
    return handleResponse(res);
  },

  post: async (path, data) => {
    const res = await fetch(`${config.API_BASE_URL}${path}`, {
      method: 'POST',
      headers: getHeaders(),
      body: JSON.stringify(data),
    });
    return handleResponse(res);
  },

  put: async (path, data) => {
    const res = await fetch(`${config.API_BASE_URL}${path}`, {
      method: 'PUT',
      headers: getHeaders(),
      body: JSON.stringify(data),
    });
    return handleResponse(res);
  },

  del: async (path) => {
    const res = await fetch(`${config.API_BASE_URL}${path}`, {
      method: 'DELETE',
      headers: getHeaders(),
    });
    return handleResponse(res);
  },
};

export default api;

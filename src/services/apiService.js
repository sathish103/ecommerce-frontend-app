import axiosInstance from '../axiosInstance';

const api = {
  get: (path) => axiosInstance.get(path).then(res => res.data),
};

export default api;
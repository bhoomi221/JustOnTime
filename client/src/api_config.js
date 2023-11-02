import axios from 'axios';

const api = axios.create({
  baseURL: 'https://justontime.onrender.com/api/',
  withCredentials: true // Ensure credentials are sent
});

api.interceptors.request.use((config) => {
  config.headers['Content-Type'] = 'application/json';
  return config;
});

export default api;

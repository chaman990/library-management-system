// axios-config.js
import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://localhost:3001', // Change this to your desired base URL
});

export default axiosInstance;

import axios from 'axios';

const BASE_URL = `http://localhost:3004`;
const REQUEST_TIMEOUT = 5000;


export const api = axios.create({
  baseURL: BASE_URL,
  timeout: REQUEST_TIMEOUT,
});

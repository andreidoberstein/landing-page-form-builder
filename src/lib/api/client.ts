import axios from 'axios'

export const api = axios.create({
  // baseURL: 'http://localhost:3030/',
  
  baseURL: 'https://api-form-builder-production.up.railway.app',
  headers: {
    'Content-Type': 'application/json',
  },
});
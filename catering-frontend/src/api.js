import axios from 'axios'

export const BaseURL = 'http://127.0.0.1:8000'
const api = axios.create({
  baseURL: 'http://127.0.0.1:8000',
  timeout: 10000, // 10 seconds
})

export default api;
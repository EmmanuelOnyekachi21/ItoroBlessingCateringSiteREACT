import axios from 'axios'
import createAuthRefreshInterceptor from 'axios-auth-refresh'

export const BaseURL = 'http://127.0.0.1:8000'

const api = axios.create({
  baseURL: 'http://127.0.0.1:8000',
  timeout: 10000, // 10 seconds
  headers: {
    "Content-Type": "application/json",
  },
});

// Request interceptor to attach auth token
// api.interceptors.request.use(
//   (config) => {
//     const { access } = JSON.parse(localStorage.getItem('auth'));
//     if (access){
//       config.headers.Authorization = `Bearer ${access}`;
//     }
//     return config;
//   }
// );

// api.interceptors.response.use(
//   (response) => response,
//   (error) => Promise.reject(error),
// );

// const refreshAuthLogic = async (failedRequest) => {
//   const { refresh } = JSON.parse(localStorage.getItem('auth'));

//   try {
//     const response = await api.post('/api/auth/refresh/', { refresh });
//     const { access, refresh: newRefresh } = response.data;
//     failedRequest.response.config.headers.Authorization = `Bearer ${access}`;
//     localStorage.setItem('auth', JSON.stringify({ access, refresh: newRefresh || refresh }));
//     return await Promise.resolve();
//   } catch (error) {
//     localStorage.removeItem('auth');
//     return await Promise.reject(error);
//   }
// }

// createAuthRefreshInterceptor(api, refreshAuthLogic)


export default api;
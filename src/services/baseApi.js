import PATH_URL from '@common/config/pathURL';
import queryString from 'query-string';
import axios from 'axios';
import cache from '@common/utils/cache';
import BASE_URL from '@common/config/endpoint';
import jwtDecode from 'jwt-decode';

const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  paramsSerializer: (params) => queryString.stringify(params),
});

// Add a request interceptor
api.interceptors.request.use(
  async (config) => {
    // Do something before request is sent
    const token = cache.getJson('token');

    if (token) config.headers.Authorization = `Bearer ${token}`;
    return config;
  },
  (error) => {
    // Do something with request error
    return Promise.reject(error);
  },
);

// Add a response interceptor
api.interceptors.response.use(
  (response) => {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response.data;
  },
  async (error) => {
    // const decoded = jwtDecode(cache.getJson('token'));
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    const originalRequest = error.config;
    if (
      error.response.status === 401 &&
      window.location.pathname !== PATH_URL.LOGIN
    ) {
      originalRequest._retry = true;
      const resfreshToken = cache.getJson('refresh_token');
      try {
        api
          .post('/admin/refreshToken', {
            refresh_token: resfreshToken,
            userId: jwtDecode(cache.getJson('token')).id,
          })
          .then((res) => {
            cache.setJson('token', res.access_token);
            cache.setJson('refresh_token', res.refresh_token);
          })
          .catch(() => {
            cache.remove('token');
            cache.remove('refresh_token');
            cache.remove('persist:root');
            window.location = PATH_URL.LOGIN;
          });
      } catch (err) {
        cache.remove('token');
        cache.remove('refresh_token');
        cache.remove('persist:root');
        window.location = PATH_URL.LOGIN;
      }

      return api(originalRequest);
    }
    return Promise.reject(error);
  },
);

export default api;

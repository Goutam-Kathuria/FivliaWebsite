import axios from 'axios';
import { getToken } from './get-token';

const http = axios.create({
  baseURL: process.env.NEXT_PUBLIC_REST_API_ENDPOINT,
  timeout: 30000,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});

// Change request data/error here
http.interceptors.request.use(
  (config) => {
    const token = getToken();
    // config.headers.Authorization = {
    //   ...config.headers,
    //   Authorization: `Bearer ${token ? token : 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2ODRiZjNjZjBlYmI4YWVkM2E1OTY5MTIiLCJpYXQiOjE3NTI2NDMwNTV9.afA5b9oq0puAEs_BZodyp-vFEK0TVFoKNWYmezG2mOc'}`,
    // };
    config.headers.Authorization = `Bearer ${
      token
        ? token
        : 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2ODYyN2I3OTAyYzgxOGFiOTlkZGMyM2QiLCJpYXQiOjE3NTI4MTIxOTF9.l5JZv3_qMUbPto-HRVG-m2Evjg75RKSWSUULQDW5Tqg'
    }`;
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default http;

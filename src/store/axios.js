import axios, { AxiosResponse } from 'axios';

export const request = axios.create({
  baseURL: 'https://6391db0eb750c8d178cf71b9.mockapi.io/',
  headers: {
    'Content-Type': 'application/json',
  },
});


import { request } from 'store/axios';

export const getNews = () => {
  const url = `wsp/react`;

  return request.get(url);
};


import {  useQuery } from 'react-query';
import {getNews} from "./api";

export const useNews = () => {
  const { data, isLoading, error, isSuccess } = useQuery('news', () =>
    getNews().then((res) =>{
      return      res.data
    }
  ))

  return { data, isLoading, error, isSuccess, count: data?.count || 0 };
};


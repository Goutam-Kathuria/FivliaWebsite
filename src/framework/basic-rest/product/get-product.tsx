import { Product } from '@framework/types';
import http from '@framework/utils/http';
import { API_ENDPOINTS } from '@framework/utils/api-endpoints';
import { useQuery } from 'react-query';

export const fetchProduct = async (id: string) => {
  const { data } = await http.get(API_ENDPOINTS.PRODUCT(id));
  return data.products ? data.products[0] : null;
};
export const useProductQuery = (id: string) => {
  return useQuery<Product, Error>([API_ENDPOINTS.PRODUCT, id], () =>
    fetchProduct(id)
  );
};

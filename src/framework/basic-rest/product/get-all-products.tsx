import { QueryOptionsType, Product } from '@framework/types';
import { API_ENDPOINTS } from '@framework/utils/api-endpoints';
import http from '@framework/utils/http';
import shuffle from 'lodash/shuffle';
import { useInfiniteQuery } from 'react-query';
type PaginatedProduct = {
  data: Product[];
  paginatorInfo: any;
};
const fetchProducts = async ({ queryKey }: any) => {
  const [_key, _params] = queryKey;
  const { data } = await http.get(API_ENDPOINTS.PRODUCTS);
  // Map API products to expected shape
  const products = (data || []).map((prod: any) => ({
    ...prod, // Spread first, so explicit mappings below take precedence
    id: prod._id || prod.id,
    name: prod.productName || prod.name,
    slug:
      prod.slug ||
      (prod.productName
        ? prod.productName.toLowerCase().replace(/\s+/g, '-')
        : undefined),
    image:
      prod.productImageUrl && prod.productImageUrl.length > 0
        ? {
            original: prod.productImageUrl[0],
            thumbnail: prod.productImageUrl[0],
          }
        : undefined,
    price: prod.sell_price,
    basePrice: prod.mrp,
    unit: prod.unit?.name,
    brand: prod.brand_Name?.name,
  }));
  return {
    data: shuffle(products) as Product[],
    paginatorInfo: {
      nextPageUrl: '',
    },
  };
};

const useProductsQuery = (options: QueryOptionsType) => {
  return useInfiniteQuery<PaginatedProduct, Error>(
    [API_ENDPOINTS.PRODUCTS, options],
    fetchProducts,
    {
      getNextPageParam: ({ paginatorInfo }) => paginatorInfo.nextPageUrl,
    }
  );
};

export { useProductsQuery, fetchProducts };

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
  let url = API_ENDPOINTS.PRODUCT(_params.category._id);

  const { data } = await http.get(url);
  // Map API products to expected shape
  const products = (data.products || []).map((prod: any) => ({
    ...prod,
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

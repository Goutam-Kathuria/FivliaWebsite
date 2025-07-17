import { QueryOptionsType, Product } from '@framework/types';
import http from '@framework/utils/http';
import { API_ENDPOINTS } from '@framework/utils/api-endpoints';
import { useQuery } from 'react-query';

export const fetchBestSellerGroceryProducts = async ({ queryKey }: any) => {
  const [_key, _params] = queryKey;
  const {
    data: { best },
  } = await http.get(API_ENDPOINTS.POPULAR_PRODUCTS);
  // Map API products to expected shape
  const products = (best || []).map((prod: any) => ({
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
  return products as Product[];
};
export const useBestSellerGroceryProductsQuery = (
  options: QueryOptionsType
) => {
  return useQuery<Product[], Error>(
    [API_ENDPOINTS.POPULAR_PRODUCTS, options],
    fetchBestSellerGroceryProducts
  );
};

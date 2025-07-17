import { QueryOptionsType, Brand } from '@framework/types';
import http from '@framework/utils/http';
import { API_ENDPOINTS } from '@framework/utils/api-endpoints';
import { useQuery } from 'react-query';

export const fetchBrands = async ({ queryKey }: any) => {
  const [_key, _params] = queryKey;
  const {
    data: { data },
  } = await http.get(API_ENDPOINTS.BRANDS);
  // Map API brands to expected shape
  const brands = (data || []).map((brand: any) => ({
    ...brand, // Spread first, so explicit mappings below take precedence
    id: brand._id || brand.id,
    name: brand.name,
    slug:
      brand.slug ||
      (brand.name ? brand.name.toLowerCase().replace(/\s+/g, '-') : undefined),
    image: brand.image
      ? { original: brand.image, thumbnail: brand.image }
      : undefined,
  }));
  return { brands: { data: brands as Brand[] } };
};
export const useBrandsQuery = (options: QueryOptionsType) => {
  return useQuery<{ brands: { data: Brand[] } }, Error>(
    [API_ENDPOINTS.BRANDS, options],
    fetchBrands
  );
};

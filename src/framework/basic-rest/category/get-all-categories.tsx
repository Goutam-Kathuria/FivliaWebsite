import { CategoriesQueryOptionsType, Category } from '@framework/types';
import http from '@framework/utils/http';
import { API_ENDPOINTS } from '@framework/utils/api-endpoints';
import { useQuery } from 'react-query';

export const fetchCategories = async ({ queryKey }: any) => {
  const [_key, _params] = queryKey;
  const {
    data: { result },
  } = await http.get(API_ENDPOINTS.CATEGORIES);
  // Map API categories to expected shape
  const categories = (result || []).map((cat: any) => ({
    ...cat, // Spread first, so explicit mappings below take precedence
    id: cat._id || cat.id,
    name: cat.name,
    slug:
      cat.slug ||
      (cat.name ? cat.name.toLowerCase().replace(/\s+/g, '-') : undefined),
    image: cat.image
      ? { original: cat.image, thumbnail: cat.image }
      : undefined,
    icon: cat.icon,
    children: cat.subcat || cat.children || [],
  }));
  return { categories: { data: categories as Category[] } };
};

export const useCategoriesQuery = (options: CategoriesQueryOptionsType) => {
  return useQuery<{ categories: { data: Category[] } }, Error>(
    [API_ENDPOINTS.CATEGORIES, options],
    fetchCategories
  );
};

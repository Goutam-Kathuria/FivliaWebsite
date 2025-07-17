export const API_ENDPOINTS = {
  // Product Endpoints
  PRODUCTS: '/getProducts', // GET all products (token required)
  PRODUCT: '/getProduct', // GET single product (needs :id)
  FEATURED_PRODUCTS: '/getFeatureProduct', // GET featured products (token required)
  POPULAR_PRODUCTS: '/bestSelling', // GET best selling products (token required)
  SEARCH: '/search', // GET search products (token required)
  PRODUCT_VARIANTS: '/getVarients', // GET product variants (needs :id)
  RELATED_PRODUCTS: '/relatedProduct', // GET related products (token required, needs :productId)
  BEST_SELLER_PRODUCTS: '/bestSelling',
  BEST_SELLER_GROCERY_PRODUCTS: '/bestSelling',
  CHIPS_PRODUCTS: '/chip-products.json',
  COOKIES_PRODUCTS: '/cookies-products.json',
  FLASH_SELL_PRODUCTS: '/flash-sell-products.json',
  FRESH_VEGETABLES_PRODUCTS: '/fresh-vegetables-products.json',
  POPCORN_JERKY_PRODUCTS: '/popcorn-jerky-products.json',
  WISHLIST: '/wishlist.json',

  // Category Endpoints
  SUBCATEGORIES: '/GetSubCategories', // GET subcategories (needs :categoryId)
  SUBSUBCATEGORIES: '/GetSubSubCategories', // GET sub-subcategories (needs :subcatId)
  CATEGORIES: '/getMainCategory',

  // Brand Endpoints
  BRANDS: '/getBrand', // GET all brands
  ADD_BRAND: '/brand', // POST add brand (upload)

  // Shop Endpoints
  SHOP: '/shop.json',
  SHOPS: '/shops.json',

  // Address & Contact Endpoints
  ADDRESS: '/address.json',
  CONTACT: '/contact.json',

  // Order Endpoints
  ORDER: '/order.json',
  ORDER_STATUS: '/order-status.json',
  ORDERS: '/orders',

  // Payment Endpoints
  PAYMENT: '/payment.json',

  // Banner Endpoints
  BANNERS: '/getBanner', // GET banners (token required)
  ALL_BANNERS: '/getAllBanner', // GET all banners

  // Auth Endpoints
  LOGIN: '/signin',
  REGISTER: '/signin',
  LOGOUT: '/logout',
  FORGET_PASSWORD: '/forget-password',
  DIETARY: '/dietary',
};

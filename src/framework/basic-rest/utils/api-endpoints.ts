export const API_ENDPOINTS = {

  PRODUCTS: '/website/getProduct?lat=29.1553958&lng=75.7218976',
  PRODUCT: (id: string | number) => `/website/getProduct?lat=29.1553958&lng=75.7218976&id=${id}`,
  FEATURED_PRODUCTS: '/website/featureProduct?lat=29.1553958&lng=75.7218976',

  POPULAR_PRODUCTS: `/website/bestSelling?lat=29.1553958&lng=75.7218976`, 
  
  SEARCH: '/website/searchProduct?lat=29.1553958&lng=75.7218976', 
  
  PRODUCT_VARIANTS: '/getVarients', 
  
  RELATED_PRODUCTS: '/website/relatedProducts?lat=29.1553958&lng=75.7218976',
  
  BEST_SELLER_PRODUCTS: `/website/bestSelling?lat=29.1553958&lng=75.7218976`,
  BEST_SELLER_GROCERY_PRODUCTS: `/website/bestSelling?lat=29.1553958&lng=75.7218976`,
  CHIPS_PRODUCTS: '/chip-products.json',
  COOKIES_PRODUCTS: '/cookies-products.json',
  FLASH_SELL_PRODUCTS: '/flash-sell-products.json',
  FRESH_VEGETABLES_PRODUCTS: '/fresh-vegetables-products.json',
  POPCORN_JERKY_PRODUCTS: '/popcorn-jerky-products.json',
  WISHLIST: '/wishlist.json',

  
  SUBCATEGORIES: '/GetSubCategories',
  SUBSUBCATEGORIES: '/GetSubSubCategories', 
  CATEGORIES: '/getMainCategory',


  BRANDS: '/getBrand',
  ADD_BRAND: '/brand',
  

  SHOP: '/shop.json',
  SHOPS: '/shops.json',


  ADDRESS: '/address.json',
  CONTACT: '/contact.json',


  ORDER: '/order.json',
  ORDER_STATUS: '/order-status.json',
  ORDERS: '/orders',


  PAYMENT: '/payment.json',


  BANNERS: '/getBanner',
  ALL_BANNERS: '/getAllBanner',


  LOGIN: '/signin',
  REGISTER: '/signin',
  LOGOUT: '/logout',
  FORGET_PASSWORD: '/forget-password',
  DIETARY: '/dietary',
};

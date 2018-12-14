export const DOMAIN = process.env.NODE_ENV === 'development'
  ? process.env.REACT_APP_DEV_DOMAIN
  : process.env.REACT_APP_PROD_DOMAIN;

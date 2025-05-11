export const APP_NAME = process.env.NEXT_PUBLIC_APP_NAME || "Shoes Store";
export const APP_SLOGAN = process.env.NEXT_PUBLIC_APP_SLOGAN || "My App Slogan";
export const APP_DESCRIPTION =
  process.env.NEXT_PUBLIC_APP_DESCRIPTION || "My App Description";
//export const APP_KEYWORDS =
// process.env.NEXT_PUBLIC_APP_KEYWORDS || 'My App Keywords'
export const SERVER_URL =
  process.env.NEXT_PUBLIC_APP_URL || "https://localhost:3000"; // 'https://myapp.com'
// set product limit
export const LATEST_PRODUCT_LIMIT =
  Number(process.env.LATEST_PRODUCT_LIMIT) || 4;

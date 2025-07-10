// API configuration based on environment
const API_URL = import.meta.env.MODE === 'production' 
  ? import.meta.env.VITE_LIVE_API_URL
  : import.meta.env.VITE_DEV_API_URL;

// Validate that the API URL is defined
if (!API_URL) {
  console.warn('API URL is not defined in environment variables. Please check your .env configuration.');
}

export default API_URL;

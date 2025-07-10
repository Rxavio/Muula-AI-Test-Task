// API configuration based on environment
const API_URL = import.meta.env.MODE === 'production' 
  ? import.meta.env.VITE_LIVE_API_URL || 'https://muula-ai-test-task-backend.vercel.app/api'
  : import.meta.env.VITE_DEV_API_URL || 'http://localhost:3000/api';

export default API_URL;

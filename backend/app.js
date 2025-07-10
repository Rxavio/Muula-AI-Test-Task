require('dotenv').config();
const express = require('express');
const cors = require('cors');
const logger = require('morgan');
const helmet = require('helmet');
const skillRoutes = require('./routes/skillRoutes');
const healthRoutes = require('./routes/healthRoutes');
const errorHandler = require('./middleware/errorHandler');

const app = express();
const PORT = process.env.PORT || 5000;
const MESSAGE = process.env.MESSAGE || 'SkillScope API';

// Determine allowed origins based on environment
const allowedOrigins = [
  process.env.DEV_FRONTEND_URL || 'http://localhost:5173',
  process.env.LIVE_FRONTEND_URL || 'https://muula-ai-test-task.vercel.app',
  'https://muula-ai-test-task-git-main-rxavios-projects.vercel.app',
  'https://muula-ai-test-task-9u4vtvqwr-rxavios-projects.vercel.app'
];

// Configure CORS
app.use(function (req, res, next) {
  const origin = req.headers.origin;
  if (allowedOrigins.includes(origin)) {
    res.setHeader('Access-Control-Allow-Origin', origin);
  } else {
    res.setHeader('Access-Control-Allow-Origin', '*');
  }
  
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  
  // Handle preflight requests
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }
  
  next();
});

// Middleware
app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(logger('dev'));

// Log every request to the terminal
app.use((req, res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.originalUrl}`);
  next();
});

// API routes
app.use('/api', healthRoutes);
app.use('/api', skillRoutes);

// Root route
app.get('/', (req, res) => {
  res.send(MESSAGE);
});

// Error handler
app.use(errorHandler);

// For local development
if (process.env.NODE_ENV !== 'production') {
  app.listen(PORT, () => {
    console.log(`✅ Server is running at http://localhost:${PORT}`);
  });
}

// Export for serverless deployment
module.exports = app;

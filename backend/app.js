
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



app.use(function (req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, PATCH, DELETE"
  );
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  res.setHeader("Access-Control-Allow-Credentials", true);
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

app.listen(PORT, () => {
  console.log(`✅ Server is running at http://localhost:${PORT}`);
});

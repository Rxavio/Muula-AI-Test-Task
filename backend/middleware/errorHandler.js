// Centralized error handling middleware
module.exports = (err, req, res, next) => {
  console.error(err.stack || err.message);
  res.status(err.status || 500).json({
    error: err.message || 'Internal Server Error',
    details: err.details || undefined
  });
};

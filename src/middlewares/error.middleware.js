/**
 * Not Found Handler
 */
const notFoundHandler = (req, res, next) => {
  res.status(404).json({
    status: "Failure",
    message: `Route not found: ${req.originalUrl}`,
  });
};

/**
 * Global Error Handler
 */
const errorHandler = (err, req, res, next) => {
  console.error("🔥 Error:", err);

  res.status(err.status || 500).json({
    status: "Failure",
    message: err.message || "Internal Server Error",
  });
};

module.exports = { errorHandler, notFoundHandler };

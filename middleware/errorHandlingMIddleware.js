// Middleware for handling 404 errors
const notFoundHandler = (req, res, next) => {
  res.status(404).json({
    error: "Not Found",
    message: "The resource you are looking for does not exist.",
  });
};

// Middleware for handling 500 errors
const errorHandler = (err, req, res, next) => {
  console.error("Server Error:", err.stack); // Log the error stack for debugging
  res.status(500).json({
    error: "Internal Server Error",
    message: "A interanl Error occoured Plase try again later",
  });
};

module.exports = { notFoundHandler, errorHandler };

const corsOptions = {
  origin: "*", // Replace with your frontend dev server URL
  methods: ["GET", "POST", "PUT", "DELETE"], // Allowed HTTP methods
  allowedHeaders: ["Content-Type", "Authorization"], // Allowed request headers
};

module.exports = { corsOptions };

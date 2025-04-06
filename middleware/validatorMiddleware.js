const { validationResult } = require("express-validator");

const handleValidationErrors = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    const message = errors.errors[0].msg;
    return res.status(400).json({ message });
  }
  next();
};

module.exports = { handleValidationErrors };

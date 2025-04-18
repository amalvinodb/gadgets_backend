const { body } = require("express-validator");

// Validation middleware for creating a gadget
const validateLoginData = [
  body("email")
    .notEmpty()
    .withMessage("email is required")
    .isEmail()
    .withMessage("requires valid email"),
  body("password").notEmpty().withMessage("Password is required"),
];
const validateSignupData = [
  body("name").notEmpty().withMessage("name is required"),
  body("email")
    .notEmpty()
    .withMessage("email is required")
    .isEmail()
    .withMessage("valid email is required"),
  body("password")
    .notEmpty()
    .withMessage("password is required")
    .isLength({ min: 6 })
    .withMessage("password need to be more than 6 characters"),
];

module.exports = { validateLoginData, validateSignupData };

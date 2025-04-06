const express = require("express");
const userController = require("../controller/user.controller");
const { handleValidationErrors } = require("../middleware/validatorMiddleware");
const {
  validateLoginData,
  validateSignupData,
} = require("../middleware/validators/login.validator");
const router = express.Router();

router.post(
  "/signup",
  validateSignupData,
  handleValidationErrors,
  userController.userSignUp
);
router.post(
  "/login",
  validateLoginData,
  handleValidationErrors,
  userController.doLogin
);

module.exports = router;

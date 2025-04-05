const express = require("express");
const userController = require("../controller/user.controller");
const authMiddleware = require("../middleware/auth.middleware");
const router = express.Router();

router.post("/signup", userController.userSignUp);
router.post("/login", authMiddleware.verifyUser, userController.doLogin);

module.exports = router;

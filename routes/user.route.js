const express = require("express");
const userController = require("../controller/user.controller");
const router = express.Router();

router.post("/signup", userController.userSignUp);
router.post("/login", userController.doLogin);

module.exports = router;

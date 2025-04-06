const express = require("express");
const gadgetsContoller = require("../controller/gadgets.controller");
const authMiddleware = require("../middleware/auth.middleware");
const router = express.Router();

router.get("/", authMiddleware.verifyUser, gadgetsContoller.getAllData);

module.exports = router;

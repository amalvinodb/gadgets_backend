const express = require("express");
const gadgetsContoller = require("../controller/gadgets.controller");
const router = express.Router();

router.get("/", gadgetsContoller.getAllData);

module.exports = router;

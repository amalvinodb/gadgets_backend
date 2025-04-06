const express = require("express");
const gadgetsContoller = require("../controller/gadgets.controller");
const authMiddleware = require("../middleware/auth.middleware");
const router = express.Router();

router.get("/", authMiddleware.verifyUser, gadgetsContoller.getAllData);
router.post("/add", authMiddleware.verifyUser, gadgetsContoller.addGadget);
router.post("/secret", authMiddleware.verifyUser, gadgetsContoller.getSecret);
router.get("/:id", authMiddleware.verifyUser, gadgetsContoller.findOne);
router.put(
  "/update/:id",
  authMiddleware.verifyUser,
  gadgetsContoller.updateGadget
);
router.delete(
  "/delete/:id",
  authMiddleware.verifyUser,
  gadgetsContoller.deleteGadget
);
router.post(
  "/delete",
  authMiddleware.verifyUser,
  gadgetsContoller.deleteMultipe
);

module.exports = router;

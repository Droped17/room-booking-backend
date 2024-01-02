const express = require("express");
const router = express.Router();
const authController = require("../controller/auth-controller");
const authenMiddleware = require("../middlewares/authenticate");

router.post("/register", authController.register);
router.post("/login",authController.login);
router.get("/me", authenMiddleware, authController.me);

module.exports = router;

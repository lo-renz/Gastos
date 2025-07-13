const express = require("express");

const {
  testing,
  registerUser,
  loginUser,
  getUserInfo,
} = require("../controllers/authController");

const router = express.Router();

router.post("/register", testing);
// router.post("/register", registerUser);

router.post("/login", loginUser);

// router.get("/getUser", protect, getUserInfo);

module.exports = router;

const express = require("express");
const router = express.Router();
const users = require("../controlers/user");
const varifyUser = require("../middleware/varifyUser");
const {
  userValidationResult,
  validateName,
  validateEmail,
  validatePassword
} = require("../validation/userValidation");

router.post(
  "/register",
  validateName,
  validateEmail,
  validatePassword,
  userValidationResult,
  users.registerUser
);

router.post("/login", users.loginUser);

router.get("/logout", users.logoutUser);

router.get("/authenticated", varifyUser, users.authencateUser);

module.exports = router;

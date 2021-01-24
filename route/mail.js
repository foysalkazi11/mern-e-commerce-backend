const express = require("express");
const router = express.Router();
const mail = require("../controlers/mail");
const {
  userValidationResult,
  validateEmail
} = require("../validation/userValidation");

router.post("/addEmail", validateEmail, userValidationResult, mail.addEmail);

module.exports = router;

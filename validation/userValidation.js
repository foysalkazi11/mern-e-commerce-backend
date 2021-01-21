const { body, validationResult } = require("express-validator");

exports.userValidationResult = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    const error = errors.array()[0].msg;
    return res.status(400).json({ message: error });
  }
  next();
};

exports.validateName = body("name")
  .trim()
  .not()
  .isEmpty()
  .withMessage("username should not be empty")
  .matches(/^[a-z\s-]{3,30}$/i)
  .withMessage("username should at least 3 characters long and no number")
  .escape();
exports.validateEmail = body("email")
  .trim()
  .not()
  .isEmpty()
  .withMessage("email should not be empty")
  .isEmail()
  .withMessage("Enter valid email")
  .normalizeEmail()
  .withMessage("Enter valid email");
exports.validatePassword = body("password")
  .trim()
  .not()
  .isEmpty()
  .withMessage("password should not be empty")
  .matches(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{6,}$/)
  .withMessage(
    "Password mast be minimum 6 characters long, at least one uppercase letter, one lowercase letter, one number and one special character (#?!@$%^&*-)"
  );

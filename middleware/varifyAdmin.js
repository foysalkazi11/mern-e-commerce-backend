const User = require("../models/userModel");
const varifyAdmin = async (req, res, next) => {
  const user = await User.findOne({ email: req.userEmail });

  if (user.role === "admin") {
    next();
  } else {
    return res.status(401).json({ message: "permission denied !" });
  }
};

module.exports = varifyAdmin;

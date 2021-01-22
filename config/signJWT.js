const jwt = require("jsonwebtoken");

const signToken = (email) => {
  return jwt.sign(
    {
      userEmail: email
      // exp: Math.floor(Date.now() / 1000) + 60 * 60
    },
    process.env.JWT_SECRET,
    // process.env.JWT_SECRET,
    { expiresIn: Date.now() + 1000 * 60 * 60 * 24 * 7 }
  );
};

module.exports = signToken;

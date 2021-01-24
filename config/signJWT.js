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

const varifyToken = (token) => {
  if (!token) {
    return res.status(401).json({ message: "authorization denied" });
  }
  const decoded = jwt.verify(token, process.env.JWT_SECRET);
  return decoded;
};

module.exports = { signToken, varifyToken };

const cookieExtractor = require("../config/cookieExtractor");
const { varifyToken } = require("../config/signJWT");

const varifyUser = async (req, res, next) => {
  try {
    const token = cookieExtractor(req);
    const decoded = varifyToken(token);
    req.userEmail = decoded.userEmail;
    next();
  } catch (error) {
    res.status(401).json({ message: error.message });
  }
};

module.exports = varifyUser;

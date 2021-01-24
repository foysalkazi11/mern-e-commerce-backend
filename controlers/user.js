const jwt = require("jsonwebtoken");
const User = require("../models/userModel");
const bcrypt = require("bcrypt");
const { signToken } = require("../config/signJWT");
const cookieOptions = require("../config/cookieOptions");

//register user
module.exports.registerUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    const alredyUser = await User.findOne({ email });
    if (alredyUser) {
      return res
        .status(401)
        .json({ message: "These email alredy exist plese use another email" });
    }
    const hashPassword = await bcrypt.hash(password, 10);
    const newUser = new User({ ...req.body, password: hashPassword });
    await newUser.save();
    //sing JWT and stoe browser cookie
    const token = signToken(newUser.email);
    res.cookie("access_token", token, cookieOptions);
    res.status(201).json({
      message: "user added successfully",
      isAuthenticated: true,
      user: { name: newUser.name, email: newUser.email, role: newUser.role }
    });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

//login user

module.exports.loginUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    const findUser = await User.findOne({ email });
    if (!findUser) {
      return res.status(401).json({ message: "email or password incorrect" });
    }
    const match = await bcrypt.compare(password, findUser.password);
    if (!match) {
      return res.status(401).json({ message: "email or password incorrect" });
    }
    //sing JWT and stoe browser cookie
    const token = signToken(findUser.email);
    res.cookie("access_token", token, cookieOptions);
    res.status(200).json({
      message: "user login successfully",
      isAuthenticated: true,
      user: { name: findUser.name, email: findUser.email, role: findUser.role }
    });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

//logout user
module.exports.logoutUser = async (req, res) => {
  try {
    res.clearCookie("access_token");
    res.status(200).json({
      isAuthenticated: false,
      user: null,
      message: "logout successfully"
    });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

//authecated user

module.exports.authencateUser = async (req, res) => {
  try {
    const user = await User.findOne({ email: req.userEmail });
    res.status(200).json({
      message: "user still login",
      isAuthenticated: true,
      user: { name: user.name, email: user.email, role: user.role }
    });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

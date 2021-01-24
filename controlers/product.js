const Product = require("../models/product");
const User = require("../models/userModel");

//get all product
module.exports.allProduct = async (req, res) => {
  try {
    const products = await Product.find({}).sort({ data: -1 });
    res.status(200).json({ allProduct: products });
  } catch (error) {
    res.status(401).json({ message: error.message });
  }
};

//create new product
module.exports.createProduct = async (req, res) => {
  if (!req.file) {
    return res.status(401).json("Plese upload image");
  }
  try {
    const user = await User.findOne({ email: req.userEmail });
    const newProduct = new Product(req.body);
    newProduct.image.url = req.file.path;
    newProduct.image.filename = req.file.filename;
    newProduct.admin = user._id;
    await newProduct.save();
    res
      .status(200)
      .json({ creatNewProduct: true, message: "new product created" });
  } catch (error) {
    res.status(401).json({ message: error.message });
  }
};

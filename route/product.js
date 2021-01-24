const express = require("express");
const router = express.Router();
const products = require("../controlers/product");
const varifyUser = require("../middleware/varifyUser");
const varifyAdmin = require("../middleware/varifyAdmin");
const { parser } = require("../config/cloudinary");

//get all product
router.get("/allProduct", products.allProduct);

//creat new product
router.post(
  "/createProduct",
  varifyUser,
  varifyAdmin,
  parser.single("image"),
  products.createProduct
);

module.exports = router;

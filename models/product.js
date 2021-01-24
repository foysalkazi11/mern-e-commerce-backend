const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const productSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  discription: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  image: {
    url: {
      type: String,
      required: true
    },
    filename: {
      type: String,
      required: true
    }
  },
  admin: {
    type: Schema.Types.ObjectId,
    ref: "User"
  },
  date: { type: Date, default: Date.now }
});

const Product = mongoose.model("Product", productSchema);

module.exports = Product;

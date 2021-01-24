const cloudinary = require("cloudinary").v2;
const multer = require("multer");
const { CloudinaryStorage } = require("multer-storage-cloudinary");

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_KEY,
  api_secret: process.env.CLOUDINARY_SECRET
});

const storage = new CloudinaryStorage({
  cloudinary,
  params: {
    folder: "mern-ecommerce",
    allowedFormats: ["jpeg", "png", "jpg"]
  }
});
const parser = multer({ storage });

module.exports = {
  cloudinary,
  parser
};

const mongoose = require("mongoose");

const dbAltasUrl = process.env.DB_URL;
const dbLocalUrl = "mongodb://localhost/yelp-camp";
const mongoDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://kazi:B@angla12@cluster0.7zy5v.mongodb.net/mern-ecommerce?retryWrites=true&w=majority",
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
        useCreateIndex: true
      }
    );
    console.log("connected");
  } catch (error) {
    console.error(error.message);
    process.exit(1);
  }
};

module.exports = mongoDB;
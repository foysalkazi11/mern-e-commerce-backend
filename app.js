if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}
const express = require("express");
const cookieParser = require("cookie-parser");
const mongoDB = require("./config/mongoConnection");
const allowcrossDomain = require("./middleware/allowcrossDomain");
const app = express();

//mongo conncetion
mongoDB();
//allow cross domain
app.use(allowcrossDomain);

app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//route
app.use("/user", require("./route/user"));

app.listen(process.env.PORT || 5000, () => {
  console.log(`start express app at port - 5000`);
});

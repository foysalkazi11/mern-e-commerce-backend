const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const mailSchema = new Schema({
  email: {
    type: String,
    required: true
  }
});

const Mail = mongoose.model("Mail", mailSchema);
module.exports = Mail;

const Mail = require("../models/mail");

module.exports.addEmail = async (req, res) => {
  const { email } = req.body;
  try {
    const alredyEmail = await Mail.findOne({ email });

    if (alredyEmail) {
      return res
        .status(401)
        .json({ message: "These email alredy exist plese use another email" });
    }
    const newEmail = new Mail(req.body);
    await newEmail.save();
    res.status(200).json({ message: "Email added successfully" });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

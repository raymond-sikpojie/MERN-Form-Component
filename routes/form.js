const express = require("express");
const router = express.Router();
const User = require("../model/User");

router.post("/", async (req, res) => {
  const { name, email, text, phone } = req.body;

  try {
    // Save a new user
    const user = new User({
      name,
      email,
      text,
      phone,
    });

    await user.save();

    console.log(req.body);
  } catch (err) {
    console.error(err.message);
    res.status(400).send("Server Error");
  }
});

module.exports = router;

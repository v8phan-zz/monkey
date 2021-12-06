const express = require("express");
const router = express.Router();
const db = require("../config/database");
const User = require("../models/User");

router.post("/", async (req, res) => {
  console.log("req", req.body);
  const user = await User.create({ email: req.body.email, password: req.body.password });
  console.log(user);
  res.send("signup");
});

module.exports = router;

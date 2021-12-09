const express = require('express');
const bcrypt = require('bcrypt');

const router = express.Router();
// const db = require('../config/database');
const User = require('../models/User');

router.post('/', async (req, res) => {
  // const email = req.body.email;
  const password = req.body.password;
  // console.log(password);

  console.log("req", req.body);
  // looking for user in database given email
  const body = req.body;
  const result = await User.findAll({
    where: { email: body.email },
  }).catch((e) => {
    console.log(e);
  });
  // check if email is in our database
  if (result.length !== 0) {
    // loop through results for user, set user results to variable
    let userResult;
    result.forEach((user) => {
      userResult = user.dataValues;
    });
    // retrieve hashed password and compare to encrypted password used to log in
    const comparison = await bcrypt.compare(
      password,
      userResult.password,
    );
    if (comparison) {
      res.json({ id: userResult.id });
      console.log('valid password');
    } else {
      res.send('wrong pw');
    }
  } else {
    res.send('user not found');
  }
});

module.exports = router;

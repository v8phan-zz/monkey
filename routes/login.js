const express = require('express');
const router = express.Router();
const db = require('../config/database');
const User = require('../models/User');

router.post('/', async (req, res) => { 
    console.log("req", req.body);
    //looking for user in database given email
     const result = await User.findAll({ 
         where: {email: req.body.email }});
    //if/else statement depending on if email is in our database
    if (result.length !== 0){
        //loop through results for user, set user results to variable
        let userResult;
        result.forEach(
            (user) => {
                userResult = user.dataValues;
            }
        )
        //if/else statement to check password
        if (req.body.password === userResult.password){
            res.json({id: userResult.id});
            console.log(userResult);
        } else {
            res.send('wrong pw');
        }
    } else {
        res.send('user not found');

    }
    
    }

 );

module.exports = router;
const express = require('express');
const router = express.Router();

//Models
const User = require('../Models/user_model');

//API

//login
router.post('/', (req,res) => {
    const { user, requestToken } = req.body;

    //login
    if(requestToken === 'login'){
        res.send('login');
    }
    //register
    else if( requestToken === 'register'){
        User.find({'username': 'hello'}, (err,docs) => {
            err ? res.send(err) : res.send(docs);
        })
    }
})

module.exports = router;
const express = require('express');
const router = express.Router();

//Models
const User = require('../Models/user_model');

//API

//login
router.post('/', async (req, res) => {
    const { user, requestToken } = req.body;

    //login
    if (requestToken === 'login') {
        try{
            const result = await User.findOne({'username': user.username , 'password': user.password});
            res.json(result);
        }
        catch(err){ console.log(err) }
    }


    //register
    else if (requestToken === 'register') {
        console.log('request: register');
        
        try {
            const result = await User.find({ 'username': user.username });
            //username available
            if(result.length === 0) {
                //create new user
                const newUser = User({
                    username: user.username,
                    password: user.password,
                    name: user.name,
                    //to be added more
                });

                newUser.save( err => err? res.send(err) : res.send('User registered'));
            }
            //username existed
            else res.send('username existed');

        }catch(err){
            res.send(err);
        }
    }

    //administration level add
    else if (requestToken === 'admin_add') {
        console.log('request: admin_add');
        const newUser = User({
            username: 'admin123',
            password: 'admin123',
            name: 'admin'
        });

        newUser.save((err, docs) => err ? res.send(err) : res.send('Admin added'));
    }
})

module.exports = router;
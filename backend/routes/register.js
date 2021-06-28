const express = require('express');
const router = express.Router();

const User = require('../Models/user_model');

//API

//register
router.post('/', (req, res) => {
    //register
    const { user } = req.body;

    try {
        const result = await User.find({ 'username': user.username });
        //username available
        if (result.length === 0) {
            //create new user
            const newUser = User({
                username: user.username,
                password: user.password,
                name: user.name,
                //to be added more
            });

            newUser.save(err => err ? res.send(err) : res.send('User registered'));
        }
        //username existed
        else res.send('username existed');

    } catch (err) {
        res.send(err);
    }

})
const express = require('express');
const router = express.Router();

const User = require('../Models/user_model');

//API

//POST -> register
router.post('/', async (req, res) => {
    //register
    const { user } = req.body;
    console.log('/register\n');
    console.log(user);

    try {
        const result = await User.find({ 'email': user.email });
        //username available
        if (result.length === 0) {
            //create new user
            const newUser = User({
                email: user.email,
                password: user.password,
                firstName: user.firstName,
                surName: user.surName,
                mobile: user.mobile,
                location: user.location,
                birthday: user.birthday,
                gender: user.gender,
                profession: user.profession,
            });
            newUser.save(err => err ? res.send(err) : res.json({registrationSuccess: true}));
        }
        //username existed
        else res.json({registrationSuccess: false});

    } catch (err) {
        res.send(err);
    }

});

module.exports = router;
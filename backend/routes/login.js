const express = require('express');
const router = express.Router();

//Models
const User = require('../Models/user_model');

//API

// POST -> login 
router.post('/', async (req, res) => {
    const { user } = req.body;
    try {
        const result = await User.findOne({ 'email': user.email, 'password': user.password });
        res.json(result);
    }
    catch (err) { console.log(err) }
})

module.exports = router;
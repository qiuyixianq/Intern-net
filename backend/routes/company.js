const express = require('express');
const router = express.Router();

//Models
const Company = require('../Models/company_model');

router.post('/', (req,res) => {
    const { name, type } = req.body;
    const newCompany = new Company({
        companyName: name, companyType: type
    });

    newCompany.save(err => err ? res.send(err) : res.send('company saved'));
});

module.exports = router;
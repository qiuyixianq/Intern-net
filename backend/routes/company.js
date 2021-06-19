const express = require('express');
const router = express.Router();

//Models
const Company = require('../Models/company_model');

router.post('/', (req,res) => {
    const { name, size, type, industry, location, job } = req.body;
    const newCompany = new Company({
        companyName: name,
        companySize: size,
        companyType: type,
        companyIndustry: industry,
        companyLocation: location,
        companyJob: job
    });

    newCompany.save(err => err ? res.send(err) : res.send('company saved'));
});

module.exports = router;
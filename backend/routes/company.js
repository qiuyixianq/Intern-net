const express = require('express');
const router = express.Router();

//Models
const Company = require('../Models/company_model');


//API
router.get('/', (req,res) => {
    Company.find((err,docs) => err? res.send(err) : res.send(docs));
})

router.post('/', (req,res) => {
    const { name, website, size, type, industry, location, job, imgsrc } = req.body;
    const newCompany = new Company({
        companyName: name,
        companyWebsite: website,
        companySize: size,
        companyType: type,
        companyIndustry: industry,
        companyLocation: location,
        companyJob: job,
        logo: imgsrc
    });

    newCompany.save(err => err ? res.send(err) : res.send('company saved'));
});

module.exports = router;
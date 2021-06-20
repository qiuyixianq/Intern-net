const express = require('express');
const router = express.Router();

//Models
const Company = require('../Models/company_model');


//API
router.get('/', (req,res) => {
    const { searchString, isAdvanceSearch } = req.query;
    
    //normal search
    if(isAdvanceSearch === 'false'){
        if(searchString){
            //with filter
            Company.find({companyName: {"$regex": searchString, "$options": "i"}}, (err,docs) => {
                err? res.json(err) : res.json(docs);
            });
        }else{
            //no filter
            Company.find((err,docs) => err? res.json(err) : res.json(docs));
        }
    }
    //advance search
    else{
        //do advance searching
    }
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
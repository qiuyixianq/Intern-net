const express = require('express');
const router = express.Router();

//Models
const Company = require('../Models/company_model');


//API
router.get('/', (req,res) => {
    const { isAdvanceSearch } = req.query;
    
    //normal search
    if(isAdvanceSearch === 'false'){
        const { searchString } = req.query;
        if(searchString){
            //with filter
            Company.find({"companyName": {"$regex": searchString, "$options": "i"}}, (err,docs) => {
                err? res.json(err) : res.json(docs);
            });
        }else{
            //no filter
            Company.find((err,docs) => err? res.json(err) : res.json(docs));
        }
    }
    //advance search
    else{
        const obj = JSON.parse(req.query.advanceSearchObject);
        let { companyName, companyIndustry, companyLocation, companyJobTitle } = obj;

        Company.find({ 
            "companyName": { "$regex": companyName? companyName+'' : '', "$options": "i"},
            "companyIndustry": { "$regex": companyIndustry? companyIndustry+'' : '', "$options": "i"},
            "companyLocation": { "$regex": companyLocation? companyLocation+'' : '', "$options": "i"},
            "companyJob.title": { "$regex": companyJobTitle? companyJobTitle+'' : '', "$options": "i"}
        }, 
        (err,docs) => {
            err? res.json(err) : res.json(docs);
        })
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

//array search
//https://stackoverflow.com/a/45566069/11362540
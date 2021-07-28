const express = require('express');
const router = express.Router();

//Models
const Company = require('../Models/company_model');
const CompanyComment = require('../Models/comment_model');

//API
// root
router.get('/', (req, res) => {
    const { isAdvanceSearch } = req.query;

    //normal search
    if (isAdvanceSearch === 'false') {
        const { searchString } = req.query;
        if (searchString) {
            //with filter
            Company.find({ "companyName": { "$regex": searchString, "$options": "i" } }, (err, docs) => {
                err ? res.json(err) : res.json(docs);
            });
        } else {
            //no filter
            Company.find((err, docs) => err ? res.json(err) : res.json(docs));
        }
    }
    //advance search
    else {
        const obj = JSON.parse(req.query.advanceSearchObject);
        let { companyName, companyIndustry, companyLocation, companyJobTitle } = obj;

        Company.find({
            "companyName": { "$regex": companyName ? companyName + '' : '', "$options": "i" },
            "companyIndustry": { "$regex": companyIndustry ? companyIndustry + '' : '', "$options": "i" },
            "companyLocation": { "$regex": companyLocation ? companyLocation + '' : '', "$options": "i" },
            "companyJob.title": { "$regex": companyJobTitle ? companyJobTitle + '' : '', "$options": "i" }
        },
            (err, docs) => {
                err ? res.json(err) : res.json(docs);
            });
    }
});

router.post('/', (req, res) => {
    const { name, website, sizeFrom, sizeTo, type, industry, location, job, imgsrc } = req.body;

    const formatString = str => str[0].toUpperCase() + str.substring(1);
    const newCompany = new Company({
        companyName: formatString(name),
        companyWebsite: website,
        companySize: `${sizeFrom} to ${sizeTo} Employee`,
        companyType: formatString(type),
        companyIndustry: formatString(industry),
        companyLocation: formatString(location),
        companyJob: job,
        logo: imgsrc
    });

    newCompany.save(err => err ? res.send(err) : res.send('company saved'));
});

// comment
router.get('/comment', async(req, res) => {
    const { companyName } = req.query;
    console.log(companyName);

    try{
        const result = await CompanyComment.findOne({ 'companyName': companyName});
        if(!result) res.json([]);
        else res.json(result.comments);
    }catch(err) { console.log(err) }
});

router.post('/comment', async (req, res) => {
    const { companyName, comment, user } = req.body;

    try {
        const result = await CompanyComment.findOne({ 'companyName': companyName });
        //no comment; create new
        if (!result) {
            const newComment = new CompanyComment({
                companyName,
                comments: [{user,comment}]
            });
            newComment.save(err => err? res.send(err) : res.send(newComment.comments));
        }
        //have comment; push new
        else {
            CompanyComment.findOneAndUpdate(
                { 'companyName': companyName },
                { $push: { comments: {user,comment} } },
                { new: true },
                ((err, doc) => err ? res.json(err) : res.json(doc.comments))
            );
        }
    } catch (err) { console.log(err) }


});


module.exports = router;

//array search
//https://stackoverflow.com/a/45566069/11362540
const express = require('express');
const router = express.Router();


const User = require('../Models/user_model');
//API
//PUT -> save company
router.put('/', async (req, res) => {
    const { username, companyName, jobTitle } = req.body;

    try {
        const result = await User.findOne({username});
        const userResult = result._doc;

        //user found
        if (Object.keys(userResult).length !== 0) {
            //check if existing saved job in same company
            const savedCompany = userResult.savedJob.find(saved => saved.company === companyName);
            const savedCompanyIndex = userResult.savedJob.findIndex(saved => saved.company === companyName);

            //exist
            if (savedCompany) {
                //job exist ? remove : add

                //clone savedJob array
                let updatedSavedJob = [...userResult.savedJob];

                //remove
                if (savedCompany.job.find( job => job === jobTitle)) {
                    console.log('exist & remove');
                    //filter out saved job
                    let updatedJob = savedCompany.job.filter(job => job !== jobTitle);

                    //reassign into savedJob array 
                    //**IMPORANT {...savedCompany} !== savedCompany //Must refer to _doc keyword
                    updatedSavedJob[savedCompanyIndex] = {...savedCompany._doc, job: updatedJob};

                    User.findOneAndUpdate({username},{savedJob: updatedSavedJob},{new: true},(err,doc) => {
                        err? console.log(err) : res.json(doc);
                    });
                }
                //append
                else {
                    console.log('exist & append');
                    //append new job in 'job' array
                    //**IMPORANT {...savedCompany} !== savedCompany //Must refer to _doc keyword
                    updatedSavedJob[savedCompanyIndex] = { ...savedCompany._doc, job: [...savedCompany.job, jobTitle] };

                    User.findOneAndUpdate({username},{ savedJob: updatedSavedJob},{new: true},(err,docs) => {
                        err? console.log(err) : res.json(docs);
                    });
                }
            }
            //new save obj
            else {
                console.log('!exist & add');
                //clone savedJob
                let updateAppliedJob = [...userResult.savedJob, { company: companyName, job: [jobTitle] }];
                const updatedUser = { ...userResult, savedJob: updateAppliedJob };
                
                User.findOneAndUpdate({username},updatedUser,{new: true},(err,docs) => {
                    err? console.log(err) : res.json(docs);
                });
            }
        }
    }
    catch (err) { console.log(err) }

});

module.exports = router;
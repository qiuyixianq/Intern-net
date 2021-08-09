const express = require('express');
const router = express.Router();


const User = require('../Models/user_model');
//API
//PUT -> save company
router.put('/', async (req, res) => {
    const { email, companyName, jobTitle } = req.body;

    try {
        const result = await User.findOne({email});
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
                    //filter out saved job
                    let updatedJob = savedCompany.job.filter(job => job !== jobTitle);

                    //reassign into savedJob array 
                    //**IMPORANT {...savedCompany} !== savedCompany //Must refer to _doc keyword
                    updatedSavedJob[savedCompanyIndex] = {...savedCompany._doc, job: updatedJob};

                    User.findOneAndUpdate({email},{savedJob: updatedSavedJob},{new: true},(err,doc) => {
                        err? console.log(err) : res.json(doc);
                    });
                }
                //append
                else {
                    //append new job in 'job' array
                    //**IMPORANT {...savedCompany} !== savedCompany //Must refer to _doc keyword
                    updatedSavedJob[savedCompanyIndex] = { ...savedCompany._doc, job: [...savedCompany.job, jobTitle] };

                    User.findOneAndUpdate({email},{ savedJob: updatedSavedJob},{new: true},(err,docs) => {
                        err? console.log(err) : res.json(docs);
                    });
                }
            }
            //new save obj
            else {
                //clone savedJob
                let updateAppliedJob = [...userResult.savedJob, { company: companyName, job: [jobTitle] }];
                const updatedUser = { ...userResult, savedJob: updateAppliedJob };
                
                User.findOneAndUpdate({email},updatedUser,{new: true},(err,docs) => {
                    err? console.log(err) : res.json(docs);
                });
            }
        }
    }
    catch (err) { console.log(err) }

});

//user information update
router.put('/information', (req,res) => {
    const { updateUser, email } = req.body;
    
    User.findOneAndUpdate({email}, updateUser, {new: true}, (err,docs) => {
        err ? res.json({updateSuccess: false}) : res.json({updateSuccess: true});
    })
});

//user password change
router.put('/password', async(req,res) => {
    const { email, oldPassword, newPassword } = req.body;

    const result = await User.findOne({email, password: oldPassword});
    if(!result) res.json( {success: false});
    else {
        //update password
        User.findOneAndUpdate({email, password: oldPassword},{password: newPassword},{new: true},(err,docs) => {
            err ? res.json({success: false}) : res.json({success: true});
            console.log(`User ${docs.email} password updated`);
        })
    }
});

module.exports = router;
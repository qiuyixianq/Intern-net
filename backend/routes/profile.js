const express = require('express');
const router = express.Router();

const User = require('../Models/user_model');
//API
//PUT -> save company
router.put('/', async (req, res) => {
    const { username, companyName, jobTitle } = req.body;

    try {
        //const result = await User.findOne({username});
        //const userResult = result._doc;

        const userResult = {
            username: 'admin123',
            password: 'helloworld',
            name: 'admin',
            appliedJob: [{
                company: 'iFAST',
                job: ['software intern']
            },
            {
                company: 'iFAST2',
                job: ['something intern']
            }
        ]
        };

        //user found
        if (Object.keys(userResult).length !== 0) {
            //check if existing saved job in same company
            const savedCompany = userResult.appliedJob.find(saved => saved.company === companyName);
            const savedCompanyIndex = userResult.appliedJob.findIndex(saved => saved.company === companyName);

            //exist
            if (savedCompany) {
                //job exist ? remove : add

                //clone appliedJob array
                let updatedAppliedJob = [...userResult.appliedJob];

                //remove
                if (savedCompany.job.find( job => job === jobTitle)) {
                    //filter out saved job
                    let updatedJob = savedCompany.job.filter(job => job !== jobTitle);

                    //reassign into appliedJob array
                    updatedAppliedJob[savedCompanyIndex] = {...savedCompany, job: updatedJob};

                    //reassign into user
                    const updatedUser = {...userResult, appliedJob: updatedAppliedJob};
                    res.json(updatedUser);
                }
                //append
                else {
                    //append new job in 'job' array
                    updatedAppliedJob[savedCompanyIndex] = { ...savedCompany, job: [...savedCompany.job, jobTitle] };
                    //reassign into user
                    const updatedUser = { ...userResult, appliedJob: updatedAppliedJob }
                    res.json(updatedUser);
                }
            }
            //new save obj
            else {
                //clone appliedJob
                let updateAppliedJob = [...userResult.appliedJob, { company: companyName, job: [jobTitle] }];
                const updatedUser = { ...userResult, appliedJob: updateAppliedJob };
                res.json(updatedUser);
            }
        }
    }
    catch (err) { console.log(err) }

});

module.exports = router;
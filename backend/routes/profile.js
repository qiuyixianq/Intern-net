const express = require('express');
const router = express.Router();

const User = require('../Models/user_model');
//API
//PUT -> save company
router.put('/', async (req,res) => {
    const { username, companyName, jobTitle } = req.body;

    try{
        //const result = await User.findOne({username});
        //const userResult = result._doc;

        const userResult = {
            username: 'admin123',
            password: 'helloworld',
            name: 'admin',
            appliedJob: [{
                company: 'iFAST',
                job: ['software intern']
            }]
        };

        //user found
        if(Object.keys(userResult).length !== 0){
            //check if existing saved job in same company
            const savedCompany = userResult.appliedJob.find(save => save.company === companyName);
            const savedCompanyIndex = userResult.appliedJob.findIndex( save => save.company === companyName);

            //exist
            if(savedCompany){
                //clone appliedJob
                let updatedAppliedJob = [...userResult.appliedJob]
                //update it
                updatedAppliedJob[savedCompanyIndex] = {...savedCompany, job: [...savedCompany.job, jobTitle]};
                //clone user and update new appliedJob
                const updatedUser = {...userResult, appliedJob: updatedAppliedJob}
                res.json(updatedUser);
            }
            //new save obj
            else {
                //clone appliedJob
                let updateAppliedJob = [...userResult.appliedJob, {company: companyName, job:[jobTitle]}];
                const updatedUser = {...userResult, appliedJob: updateAppliedJob};
                res.json(updatedUser);
            }
        }
    }
    catch(err) { console.log(err) }

});

module.exports = router;
const mongoose = require('mongoose');

const jobSchema = mongoose.Schema({
    title: {
        type:String,
        required: true 
    },

    description: {
        type:String
    }
});

const companySchema = mongoose.Schema({
    
    companyName: {
        type:String,
        required:true
    },

    companySize: {
        type:String,
        required:true 
    },

    companyType: {
        type:String,
        required:true
    },

    companyIndustry: {
        type:String,
        required:true 
    },

    companyLocation: {
        type:String,
        required:true
    },

    companyJob: [jobSchema]
    

});

module.exports = mongoose.model('companies',companySchema);
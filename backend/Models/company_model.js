const mongoose = require('mongoose');

const companySchema = mongoose.Schema({
    
    companyName: {
        type:String,
        required:true
    },

    companyType: {
        type:String,
        required:true
    }
});

module.exports = mongoose.model('companies',companySchema);
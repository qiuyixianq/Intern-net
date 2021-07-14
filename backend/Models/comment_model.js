const mongoose = require('mongoose');



const commentSchema = mongoose.Schema({
    companyName: {
        type:String,
        required: true
    },

    comments: [String] 
});

module.exports = mongoose.model('company_comment', commentSchema);
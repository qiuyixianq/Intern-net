const mongoose = require('mongoose');

const commentArr = mongoose.Schema({
    user: {
        type: String,
        required: true
    },
    
    comment: {
        type: String,
        required: true
    }
})

const commentSchema = mongoose.Schema({
    companyName: {
        type:String,
        required: true
    },

    comments: [commentArr]
});

module.exports = mongoose.model('company_comment', commentSchema);
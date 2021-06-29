const mongoose = require('mongoose');

// const jobArr = mongoose.Schema({
//     title: { type:String }
// });

const appliedJobArr = mongoose.Schema({
    company: { type:String },
    job: [{type: String}]
});

const userSchema = mongoose.Schema({
    username: {
        type:String,
        required: true
    },

    password: {
        type: String,
        required: true
    },

    name: {
        type: String,
        required: true
    },

    appliedJob: [appliedJobArr]
});

module.exports = mongoose.model('users', userSchema);
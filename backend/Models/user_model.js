const mongoose = require('mongoose');

const savedJobArr = mongoose.Schema({
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

    savedJob: [savedJobArr]
});

module.exports = mongoose.model('users', userSchema);
const mongoose = require('mongoose');

const savedJobArr = mongoose.Schema({
    company: { type:String },
    job: [{type: String}]
});

const userSchema = mongoose.Schema({
    email: {
        type: String,
        required: true
    },

    password: {
        type: String,
        required: true
    },

    firstName: {
        type: String,
        required: true
    },

    surName: {
        type: String,
        required: true
    },

    mobile: {
        type: String,
    },

    location: {
        type: String,
        required: true
    },

    birthday: {
        type: String,
        required: true
    },

    gender: {
        type: String,
        required: true
    },

    savedJob: [savedJobArr]
});

module.exports = mongoose.model('users', userSchema);
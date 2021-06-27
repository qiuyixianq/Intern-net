const mongoose = require('mongoose');

const appliedJob = mongoose.Schema({
    company: { type:String },
    title: { type: String }
})

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

    applied: [appliedJob]
});

module.exports = mongoose.model('users', userSchema);
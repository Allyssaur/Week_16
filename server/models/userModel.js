const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please add your name.']
    },
    email: {
        type: String,
        required: [true, 'You must add an email.'],
        unique: true
    },
    password: {
        type: String,
        required: [true, 'Please add a password.']
    }
})

module.exports = mongoose.model('User', userSchema);
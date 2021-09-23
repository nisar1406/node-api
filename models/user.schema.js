const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    firstName: String,
    lastName: String,
    emailId: String,
    password: String
}, {
    timestamps: true
});

module.exports = mongoose.model('user', userSchema);

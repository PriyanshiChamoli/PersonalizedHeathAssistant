// models/User.js

const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    // Add more fields as needed for your user model
    // Example: email, address, etc.
});

const User = mongoose.model('User', userSchema);

module.exports = User;

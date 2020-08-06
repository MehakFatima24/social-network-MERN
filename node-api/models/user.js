const mongoose = require('mongoose');

userSchema = new mongoose.Schema({
    name: {
        type: String,
        trim: true,
        required: true,
    },
    email: {
        type: String,
        trim: true,
        required: true,
    },
    hashed_password: {
        type: String,
        required: true,
    },
    salt: String,
    created: {
        type: Date.now
    },
    updated: {
        type: Date
    }
});

module.exports = mongoose.model("User", userSchema);
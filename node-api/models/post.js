const mongoose = require('mongoose');

postSchema = new mongoose.Schema({
    title: {
        type: String,
        required: "Title is required",
        minlength: 5,
        maxlength: 150
    },
    body: {
        type: String,
        required: "Body is required",
        minlength: 5,
        maxlength: 2000    
    }
});

module.exports = mongoose.model("Post", postSchema);
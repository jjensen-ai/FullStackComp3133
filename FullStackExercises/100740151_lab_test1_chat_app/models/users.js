const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    userName: {
        type: String,
        required: [true, "Please enter user name"],
        maxlength: 100,
        unique: true
    },
    firstName: {
        type: String,
        maxlength: 50,
    },
    lastName: {
        type: String,
        maxlength: 50,
    },
    password: {
        type: String, 
        maxlength: 12,
        required: [true, "Please enter password"]
    }
})

const user = mongoose.model('user', userSchema);

module.exports = user

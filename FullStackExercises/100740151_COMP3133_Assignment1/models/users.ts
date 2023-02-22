const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    maxlength: 100,
    unique: true,
  },
  email: {
    type: String,
    maxlength: 50,
    unique: true,
    required: true
  },
  password: {
    type: String,
    maxlength: 50,
    required: true
  },
});

export const user = mongoose.model('user', userSchema);

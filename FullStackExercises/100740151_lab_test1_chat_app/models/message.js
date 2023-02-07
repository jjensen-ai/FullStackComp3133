const mongoose = require('mongoose');

const messsageSchema = new mongoose.Schema({
  sender: {
    type: String,
    trim: true,
  },
  room: {
    type: String,
    maxLength: 100,
    default: 'Home',
  },
  message: {
    type: String,
  },
  timeStamp: {
    type: Date,
    default: Date.now(),
  },
});

const message = mongoose.model('message', messsageSchema);

module.exports = message;

const mongoose = require('mongoose');

const employeeSchema = new mongoose.Schema({
  first_name: {
    type: String,
    maxlength: 100,
    required: true,
    lowercase: true,
  },
  last_name: {
    type: String,
    maxlength: 50,
    required: true,
    lowercase: true,
  },
  email: {
    type: String,
    maxlength: 50,
    unique: true,
    lowercase: true,
  },
  gender: {
    type: String,
    maxlength: 25,
    array: ['Male', 'Female', 'Other', 'Prefer not to disclose'],
  },
  salary: {
    type: Number,
    required: true,
  },
});

export const employee = mongoose.model('employee', employeeSchema);

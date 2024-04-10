const mongoose = require('mongoose');
const validator = require('validator');

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    minLength: 2,
    maxLength: 30,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    validate: {
      validator(v) {
        return validator.isEmail(v)
      },
      message: "Неверный формат email"
    }
  },
  password: {
    type: String,
    required: true,
    select: false,
  },
});

module.exports = mongoose.model('user', userSchema);

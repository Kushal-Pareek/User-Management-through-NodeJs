const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  firstName: String,
  middleName: String,
  lastName: String,
  fullName: String,
  email : String
});

module.exports = mongoose.model('User', UserSchema);
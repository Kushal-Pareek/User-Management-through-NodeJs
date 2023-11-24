const User = require('../models/User');

exports.addUser = async (user) => {

  const newUser = new User({
    fullName: user.fullName,
    email: user.email
  });
  
  return await newUser.save();
};
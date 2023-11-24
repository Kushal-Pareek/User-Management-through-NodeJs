const userRepository = require('../repositories/userRepository');

exports.addUser = async (user) => {
  user.fullName = `${user.firstName} ${user.middleName} ${user.lastName}`;
  return await userRepository.addUser(user);
};
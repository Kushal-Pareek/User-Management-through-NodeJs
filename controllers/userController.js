const userService = require('../services/userService');

exports.addUser = async (req, res) => {
  try {
    console.log(req.body);
    const user = await userService.addUser(req.body);
    res.send(user);
  } catch (err) {
    res.status(500).send(err);
  }
};

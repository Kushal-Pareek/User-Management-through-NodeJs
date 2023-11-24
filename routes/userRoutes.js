const express = require('express');
const router = express.Router();
const { addUser } = require('../controllers/userController');
const validateUser = require('../middlewares/validateUser');

router.post('/addUser', validateUser, addUser);

module.exports = router;
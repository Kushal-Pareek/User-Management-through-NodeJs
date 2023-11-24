const { check, validationResult } = require('express-validator');

module.exports = [
    check('firstName').isLength({ min: 5 }),
    check('middleName').isLength({ min: 5 }),
    check('lastName').isLength({ min: 5 }),
    check('email').isEmail(),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  },
];
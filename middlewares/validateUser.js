const { check, validationResult } = require('express-validator');

module.exports = [
    check('firstName').isLength({ min: 3, max: 20 }).matches(/^[a-zA-Z]+$/).withMessage('First name Invalid'),
    check('middleName').isLength({ min: 5, max: 20 }).matches(/^[a-zA-Z]+$/).withMessage('Middle name invalid'),
    check('lastName').isLength({ min: 5, max: 20 }).matches(/^[a-zA-Z -]+$/).withMessage('Last name invalid'),
    check('email')
      .isEmail()
      .normalizeEmail()
      .custom((value) => {
        if (value.endsWith('@gmail.com')) {
          throw new Error('This email is not supported');
        }
        return true;
      }),
    (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  },
];
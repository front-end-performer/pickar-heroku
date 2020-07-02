const express = require('express');
const { check } = require('express-validator');

const conversionsController = require('../controllers/conversion-controllers');

const router = express.Router();

router.post(
  '/convert',
  [
    check('amount').isNumeric(),
    check('from').not().isEmpty(),
    check('to').not().isEmpty(),
    check('result').not().isEmpty(),
  ],
  conversionsController.convert
);

module.exports = router;

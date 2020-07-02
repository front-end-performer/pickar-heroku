// const jwt = require('jsonwebtoken');
const { validationResult } = require('express-validator');

const HttpError = require('../models/http-error');
const Conversion = require('../models/conversion');

const convert = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return next(
      new HttpError('Invalid inputs passed, please check your data.', 422)
    );
  }

  const { amount, from, to, result } = req.body;

  const converted = new Conversion({
    amount,
    from,
    to,
    result,
    date: Date.now(),
  });

  try {
    await converted.save();
  } catch (err) {
    const error = new HttpError(
      'Conversion failed, please try again later.',
      500
    );
    return next(error);
  }
  res.status(201).json({
    id: converted.id,
    amount: converted.amount,
    from: converted.from,
    to: converted.to,
    result: converted.result,
  });
};

exports.convert = convert;

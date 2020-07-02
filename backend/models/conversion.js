const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const Schema = mongoose.Schema;

const conversionSchema = new Schema({
  amount: { type: Number },
  from: { type: String },
  to: { type: String },
  result: { type: Number },
  date: { type: Date },
});

conversionSchema.plugin(uniqueValidator);

module.exports = mongoose.model('Conversion', conversionSchema);

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

const ToysSchema = new Schema({
  word: String,
});

const Toys = mongoose.model('Toys', ToysSchema);

module.exports = Toys;

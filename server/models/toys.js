var mongoose = require('mongoose');
var Schema = mongoose.Schema;


//this needs to be fixed.  only an array should be in the DB
const ToysSchema = new Schema({
  letter: String,
  sound: String
});


const Toys = mongoose.model('Toys', ToysSchema);

module.exports = Toys;

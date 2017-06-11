var mongoose = require('mongoose');
var Schema = mongoose.Schema;

const AnimalsSchema = new Schema({
  word: String
});

const Animals = mongoose.model('Animals', AnimalsSchema);

module.exports = Animals;

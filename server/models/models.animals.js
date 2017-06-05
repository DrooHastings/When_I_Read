var mongoose = require('mongoose');
var Schema = mongoose.Schema;


//can you use array as datatype?
const AnimalsSchema = new Schema({
  words: Array
});


const Animals = mongoose.model('Animals', AnimalsSchema);

module.exports = Animals;

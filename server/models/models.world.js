var mongoose = require ('mongoose');
var Schema = mongoose.Schema;


const WorldsSchema = new Schema({
  words: Array
});


const Worlds = mongoose.model('Worlds', WorldsSchema);

module.exports = Worlds;

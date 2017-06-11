var mongoose = require ('mongoose');
var Schema = mongoose.Schema;


const WorldsSchema = new Schema({
  word: String
});

const Worlds = mongoose.model('Worlds', WorldsSchema);

module.exports = Worlds;

//serves index.html
const express = require('express');
const path = require ('path');
let router = express.Router();

//serve index
router.get('/', function(req, res){
  res.sendFile(path.join(__dirname, '../../public/views/index.html'));
});
module.exports = router;

//serves index.html
const express = require('express');
const path = require ('path');
let router = express.Router();



router.get('/', function(req, res){
  res.sendFile(path.resolve('client/public/index.html') );
});
module.exports = router;

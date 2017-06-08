const express = require('express');
const Worlds = require ('../models/models.world');
const path = require ('path');
let router = express.Router();

router.get('/', function (req, res){
  console.log('hit world route on server');
  Worlds.find().then(function(data){
    console.log('this is data', data);
    res.send(data);
  });
});




module.exports = router;

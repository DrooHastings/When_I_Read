const express = require('express');
const Toys = require ('../models/toys');
const path = require ('path');
let router = express.Router();

router.get('/', function (req, res){
  console.log('hit toys route on server');
  Toys.find().then(function(data){
    console.log('this is data', data);
    res.send(data);
  });


});

module.exports = router;

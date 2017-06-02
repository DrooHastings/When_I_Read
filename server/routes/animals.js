const express = require('express');
// const Toys = require ('../models/animals');
const path = require ('path');
let router = express.Router();

router.get('/', function (req, res){
  console.log('hit animals route on server');
  animals.find().then(function(data){
    console.log('this is data', data);
    res.send(data);
  });
});

module.exports = router;

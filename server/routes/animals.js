const express = require('express');
const Animals = require ('../models/models.animals');
const path = require ('path');
let router = express.Router();


//get Animal words from DB
router.get('/', function (req, res){
  console.log('hit animals route on server');
  Animals.find().then(function(data){
    res.send(data);
  });
});

module.exports = router;

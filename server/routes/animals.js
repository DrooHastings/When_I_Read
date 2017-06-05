const express = require('express');
const Animals = require ('../models/models.animals');
const path = require ('path');
let router = express.Router();



router.get('/', function (req, res){
  console.log('hit animals route on server');
  Animals.find().then(function(data){
    console.log('this is data', data);
    res.send(data);
  });
});

// router.post ('/', function (req, res){
//   console.log(req.body);
//
// });

// var soundArray = [];
//
// var lionRoarSound = new Audio();
// lionRoarSound.src = 'http://sfxcontent.s3.amazonaws.com/soundfx/Lion-Roar.mp3';
//
// soundArray.push(lionRoarSound);
//
module.exports = router;

const express = require('express');
const path = require ('path');
let router = express.Router();
var soundAssigner = require ('../modules/sounds.module.js');

//add word to DB
router.post('/', function(req, res){
  var arrayOfLetters = req.body;
  var letterObjectArray = [];
  for (var i = 0; i < arrayOfLetters.length; i++) {
    var letterObject = {
      letter: arrayOfLetters[i],
      sound: ' '
      };
      soundAssigner(letterObject);
      letterObjectArray.push(letterObject);
     }//end for
     res.send(letterObjectArray);
});//end post

module.exports = router;

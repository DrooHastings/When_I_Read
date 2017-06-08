const express = require('express');
const path = require ('path');
let router = express.Router();
var soundAssigner = require ('../modules/sounds.module.js');


router.post('/', function(req, res){
  console.log('req.body',req.body);
  var arrayOfLetters = req.body;
  var letterObjectArray = [];
  for (var i = 0; i < arrayOfLetters.length; i++) {
    var letterObject = {
      letter: arrayOfLetters[i],
      sound: ' '
      };
      console.log('letterObject', letterObject);
      soundAssigner(letterObject);
      console.log('letterObject after switch', letterObject);
      letterObjectArray.push(letterObject);
     }//end for
     res.send(letterObjectArray);

});




module.exports = router;

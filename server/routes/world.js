const express = require('express');
const Worlds = require ('../models/models.world');
const path = require ('path');
let router = express.Router();


router.get('/', function (req, res){
  console.log('hit world route on server');
  let wordArray = [];
  Worlds.find().then(function(data){
    console.log('data before loop', data);
    for (var i = 0; i < data.length; i++) {
      let wordArrayObject = data[i];
      wordArray.push(wordArrayObject.word);
    }

    console.log('wordsArray after loop', wordArray);

    res.send(data);
  });
});

router.post('/', function (req, res){
  console.log('hit the add word post with:', req.body.word);
  let objectString = String(req.body.word);
  console.log('this is objectString', objectString);

  let newWord = {
    word: objectString
  };
  newWord = new Worlds(newWord);
  newWord.save(function(err){
    if(err){
      console.log('Error posting new word', err);
      res.sendStatus(500);
    } else {
      console.log('new word successful!');
      res.sendStatus(201);
    }
  });
});







module.exports = router;

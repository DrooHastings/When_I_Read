const express = require('express');
const Worlds = require ('../models/models.world');
const path = require ('path');
let router = express.Router();

//get world words
router.get('/', function (req, res){
  let wordArray = [];
  Worlds.find().then(function(data){
    for (var i = 0; i < data.length; i++) {
      let wordArrayObject = data[i];
      wordArray.push(wordArrayObject.word);
    }
    res.send(data);
  });
});//end get

//add word to DB
router.post('/', function (req, res){
  let objectString = String(req.body.word);
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
});//end post

module.exports = router;

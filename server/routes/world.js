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

router.post('/', function (req, res){
  console.log('hit the add word post with:', req.body.data);
  let newWord = {
    words: [req.body.data]
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
  })
});







module.exports = router;

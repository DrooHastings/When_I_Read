//main server file
const express = require('express');
const bodyParser = require ('body-parser');
const path = require ('path');
const port = process.env.PORT || 5000;

let app = express ();

//Routing Modules here (pre-auth)
const indexRouter = require('./routes/index');
// const toysRouter = require('./routes/toys');

//bodyParser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

//static files
app.use(express.static('public'));

//routes post-auth go here
app.use('/', indexRouter);
// app.use('/getToys', toysRouter);

//split out into it's own module later
app.get('/getToys', function(req, res){
  

});


//spin up server
app.listen(port, function() {
  console.log('up and listening on', port);
});

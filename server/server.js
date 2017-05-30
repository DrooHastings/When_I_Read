//main server file
const express = require('express');
const bodyParser = require ('body-parser');
const path = require ('path');
const port = process.env.PORT || 5000;

let app = express ();

//Routing Modules here (pre-auth)
const indexRouter = require('./routes/index');

//bodyParser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

//static files
app.use(express.static('client/public'));

//routes post-auth go here
app.use('/', indexRouter);


//spin up server
app.listen(port, function() {
  console.log('up and listening on', port);
});

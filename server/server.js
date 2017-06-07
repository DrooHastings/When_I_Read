//main server file
const express = require('express');
const bodyParser = require ('body-parser');
const path = require ('path');
const mongoose = require ('mongoose');
const port = process.env.PORT || 5000;

let app = express ();

//Routing Modules here (pre-auth)
const indexRouter = require('./routes/index');
const toysRouter = require('./routes/toys');
const animalsRouter = require ('./routes/animals');
const soundsRouter = require ('./routes/sounds');

//bodyParser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

//db connect
mongoose.connect('mongodb://localhost:27017/whenIread-db');
mongoose.connection.on('connected', function(){
  console.log('Connected to the DB');
});
mongoose.connection.on('error', function(){
  console.log('Not connected to DB');
});

mongoose.set('debug', true)

//static files
app.use(express.static('public'));

//routes post-auth go here
app.use('/', indexRouter);
app.use('/Toys', toysRouter);
app.use('/Animals', animalsRouter);
app.use('/Sounds', soundsRouter);

//split out into it's own module later



//spin up server
app.listen(port, function() {
  console.log('up and listening on', port);
});

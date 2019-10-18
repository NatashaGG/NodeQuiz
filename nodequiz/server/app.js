// const for all imports
const express = require('express');
const http = require('http');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const path = require('path');
const mongoose = require('mongoose');
const bluebird = require('bluebird');
const Employee = require('./db-models/employee');
const Quiz = require('./db-models/quiz'); 

let app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({'extended': true}));
app.use(morgan('dev'));

app.use(express.static(path.join(__dirname, '../dist/nodequiz')));
app.use('/', express.static(path.join(__dirname, '../dist/nodequiz')));

// Global variables
const serverPort = 3000;

/*****************************Mongoose connection strings go below this line ***********************************/

const connString = 'mongodb+srv://nodeQuizAdmin:Passw0rd@cluster0-xgrxn.mongodb.net/test?retryWrites=true&w=majority';

mongoose.connect(connString, {promiseLibrary:require('bluebird'), useNewUrlParser: true})
        .then(() => console.debug('Connection to MongoDB NodeQuiz was successful.'))
        .catch((err) => console.debug('MongoDB Error: ' + err.message));


/*************************** API routes go below this line *********************************/


// Employee stuff
app.post('/api/employees', function(req, res, next) {
  const employee = {
    employeeId: req.body.employeeId,
    givenname: req.body.givenname,
    surname: req.body.surname
  };

  Employee.create(employee, function(err, employees) {
    if (err) {
      console.log(err);
      return next(err);
    } else {
      console.log(employees);
      res.json(employees);
    }
  });
});

app.get('/api/employees/:id', function(req, res, next) {
  Employee.findOne({'employeeId': req.params.id}, function(err, employee) {
    if (err) {
      console.log(err);
      return next(err);
    } else {
      console.log(employee);
      res.json(employee);
    }
  })
});


/**
 * Creates an express server and listens on port 3000
 */
http.createServer(app).listen(serverPort, function() {
    console.log('Application started and listening on port: ${serverPort}');
});
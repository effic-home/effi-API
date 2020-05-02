var express = require('express');
var mysql = require('mysql');
var bodyParser = require('body-parser');
var app = express();
var port = 10000;

app.use(express.json());
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  
    app.options('*', (req, res) => {
      res.header('Access-Control-Allow-Methods', 'GET, PATCH, PUT, POST, DELETE, OPTIONS');
      res.send();
    });
});

app.listen(port, () => {
  console.log('Serveur démarré');
  });

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var connexion = require('./routes/connexionRoute'); //importing route
connexion(app); //register the route

var users = require('./routes/usersRoute'); //importing route
users(app); //register the route

var types = require('./routes/typesRoute'); //importing route
types(app); //register the route

var classes = require('./routes/classeRoute'); //importing route
classes(app); //register the route
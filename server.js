var express = require('express');
var mysql = require('mysql');
var bodyParser = require('body-parser');
var app = express();
var port = 10000;
var https = require('https');
var fs = require('fs');

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

/*app.listen(port, () => {
  console.log('Serveur démarré');
  });*/

https.createServer({
    key: fs.readFileSync('./key.pem'),
    cert: fs.readFileSync('./cert.pem'),
    passphrase: ''
}, app)
.listen(port);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('Welcome to Eff-ID API');
});

var connexion = require('./routes/connexionRoute'); //importing route
connexion(app); //register the route

var users = require('./routes/usersRoute');
users(app);

var types = require('./routes/typesRoute');
types(app);

var classes = require('./routes/classeRoute');
classes(app);

var salles = require('./routes/sallesRoute');
salles(app);

var reservations = require('./routes/reservationRoute');
reservations(app);

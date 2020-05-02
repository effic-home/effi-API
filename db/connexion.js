var mysql = require('mysql');
var connexion = require('./example.secret').connexion;

//local mysql db connection
var connection = mysql.createConnection({
    host     : connexion.host,
    user     : connexion.user,
    password : connexion.password,
    database : connexion.database,
});
connection.connect(function(err) {
    if (err) throw err;
    else
        console.log('Connecté à '+connexion.database);
});

module.exports = connection;
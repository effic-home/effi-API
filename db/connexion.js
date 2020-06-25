var mysql = require('mysql');
//var connexion = require('./example.secret').connexion;

//local mysql db connection
var connection = mysql.createConnection({
    host     : process.env.HOST,
    user     : process.env.USER,
    password : process.env.PASSWORD,
    database : process.env.DATABASE,
});
connection.connect(function(err) {
    if (err) throw err;
    else
        console.log('Connecté à '+ connection.database);
});

module.exports = connection;
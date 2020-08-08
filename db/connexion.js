var mysql = require('mysql');

var connection = mysql.createConnection({
    host     : process.env.HOST,
    user     : process.env.USER,
    password : process.env.PASSWORD,
    database : process.env.DATABASE,
    multipleStatements: true
});
connection.connect(function(err) {
    if (err) throw err;
    else
        console.log('Connecté à '+ connection.database);
});

module.exports = connection;
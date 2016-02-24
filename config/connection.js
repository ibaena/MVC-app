var mysql = require('mysql');
var connection = mysql.createConnection({
    port: 3306,
    host: 'mysql://b2454f095d0fac:3ef1d3d1@us-cdbr-iron-east-03.cleardb.net',
    database: 'heroku_10c4b9077b310a3'
});

connection.connect(function(err) {
    if (err) {
        console.error('error connecting: ' + err.stack);
        return;
    }
    console.log('connected as id ' + connection.threadId);
});

module.exports = connection;

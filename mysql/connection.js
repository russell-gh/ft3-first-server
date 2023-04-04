const mysql = require("mysql");

const connection = mysql.createConnection({
    database: 'ft3',
    user: 'root',
    password: '',
    host: 'localhost',
    port: 3306
});

connection.connect();

module.exports = connection;

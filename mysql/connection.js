const mysql = require("mysql");

const connection = mysql.createConnection({
    database: 'first-server',
    user: 'root',
    password: '',
    host: 'localhost',
    port: 3306
});

connection.connect();

module.exports = connection;

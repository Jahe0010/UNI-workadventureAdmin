var mysql = require('mysql');
require('dotenv').config();


const mysqlConnection = mysql.createConnection({
    host: process.env.DATABASE_HOST,
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD
});

module.exports = { 
    mysqlConnection 
};
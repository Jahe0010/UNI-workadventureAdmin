var mysql = require('mysql');
require('dotenv').config(); 

// Makes the connection to the database
const mysqlConnection = mysql.createConnection({
    host: process.env.DATABASE_HOST,
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: "workadventureadmin"
});

module.exports = { 
    mysqlConnection 
};
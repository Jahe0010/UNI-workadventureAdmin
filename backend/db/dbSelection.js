const mysql = require("./dbConnection.js");

/**
 * Checks if a user is an admin
 * @param {} playerUUID 
 * @returns 
 */
function isAdmin(playerUUID) {
    let admin = false;
    mysql.mysqlConnection.query("SELECT id FROM admins WHERE userId = '" + playerUUID + "'", function (err, result) {
        if (err) {
            console.log("an error occured while selecting from the database " + err)
            admin = false;
        };
        admin = result.length > 0 ? true : false;
    });
    return admin;
}

module.exports = { 
    isAdmin 
};
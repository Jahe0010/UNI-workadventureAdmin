const mysql = require("./dbConnection.js");

/**
 * Checks if a user is an admin
 * @param {} playerUUID 
 * @returns 
 */
function isAdmin(playerUUID) {
    mysql.mysqlConnection.query("SELECT id FROM admins WHERE userId = '" + playerUUID + "'", function (err, result) {
        if (err) {
            console.log("an error occured while selecting from the database " + err)
            callback(null, false);
        };
        callback(null, result.length > 0 ? true : false);
    });
}

module.exports = { 
    isAdmin 
};
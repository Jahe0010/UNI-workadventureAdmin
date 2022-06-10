const mysql = require("./dbConnection.js");

/**
 * Checks if a user is an admin
 * @param {} playerUUID 
 * @returns 
 */
async function isAdmin(playerUUID) {
    try {
        let result = mysql.mysqlConnection.query("SELECT id FROM admins WHERE userId = '" + playerUUID + "'");
        return result.length > 0 ? true : false;
    } catch (err) {
        console.log("an error occured while selecting from the database " + err)
        return false;
    }
}

module.exports = { 
    isAdmin 
};
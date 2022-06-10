const mysql = require("./dbConnection.js");

/**
 * Checks if a user is an admin
 * @param {} playerUUID 
 * @returns 
 */
async function isAdmin(playerUUID) {
    try {
        let result = await mysql.mysqlConnection.query("SELECT id FROM admins WHERE userId = '" + playerUUID + "'");
        admin = result.length > 0 ? true : false;
    } catch (error) {
        console.log("an error occured while selecting from the database " + err)
        return false;
    }
}

module.exports = { 
    isAdmin 
};
const mysql = require("./dbConnection.js");

/**
 * Adds the admin tag to a given player
 * @param {*} playerUUID 
 * @returns 
 */
function setAdmin(playerUUID) {
    var sql = "INSERT INTO admins (userId, tagId) VALUES (" + playerUUID + ", 1)";
    return mysql.mysqlConnection.query(sql, function (err, result) {
        if (err) {
            console.log("error while inserting a user as admin " + err);
            return false;
        }   
        return true;
    });
}

module.exports = { 
    setAdmin 
};
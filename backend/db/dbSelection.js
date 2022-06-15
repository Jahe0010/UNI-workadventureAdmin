const mysql = require("./dbConnection.js");

/**
 * Checks if a user is an admin
 * @param {} playerUUID 
 * @returns 
 */
function isAdmin(playerUUID) {
    return new Promise((resolve, reject)=>{
        mysql.mysqlConnection.query("SELECT id FROM admins WHERE userId = '" + playerUUID + "'", function (err, result) {
            if (err) {
                console.error("an error occured while selecting from the database " + err)
                return reject(false);
            };
            return resolve(result.length > 0 ? true : false);
        });
    });
}

module.exports = { 
    isAdmin 
};
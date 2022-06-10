const mysql = require("./dbConnection.js");

/**
 * Adds the admin tag to a given player
 * @param {*} playerUUID 
 * @returns 
 */
function setAdmin(playerUUID) {
    return new Promise((resolve, reject)=>{
        let sql = "INSERT INTO admins (userId, tagId) VALUES ('" + playerUUID + "', 1)";
        mysql.mysqlConnection.query(sql, function (err, result) {
            if (err) {
                console.log("error while inserting a user as admin " + err);
                return reject(false);
            }
            return resolve(true);
        });
    });
}

module.exports = { 
    setAdmin 
};
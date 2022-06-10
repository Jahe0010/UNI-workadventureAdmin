const mysql = require("./dbConnection.js");

/**
 * Removes a player from the admin table
 * @param {} playerUUID 
*/
function removeAdmin(playerUUID) {
    var sql = "DELETE FROM admins WHERE userId = '" + playerUUID + "'";
    return new Promise((resolve, reject)=>{
        mysql.mysqlConnection.query(sql, function (err, result) {
            if (err) {
                console.log("error while deleting the entry from the database " + err);
                return reject(false);
            };
            return resolve(true);
        });
    });
}

module.exports = { 
    removeAdmin 
};
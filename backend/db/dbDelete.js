const mysql = require("./dbConnection.js");

/**
 * Removes a player from the admin table
 * @param {} playerUUID 
*/
function removeAdmin(playerUUID) {
    return mysql.mysqlConnection.connect(function(err) {
        if (err) {
            console.log("error during connection to the database " + err);
            return false
        };

        var sql = "DELETE FROM admins WHERE userId = " + playerUUID;
        mysql.mysqlConnection.query(sql, function (err, result) {
            if (err) {
                console.log("error while deleting the entry from the database " + err);
                return false
            };
            return true
        });
      });   
}

module.exports = { 
    removeAdmin 
};
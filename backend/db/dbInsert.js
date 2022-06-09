import { mysqlConnection } from "./dbConnection";

/**
 * Adds the admin tag to a given player
 * @param {*} playerUUID 
 * @returns 
 */
function setAdmin(playerUUID) {
    return mysqlConnection.connect(function(err) {
        if (err) {
            console.log("error during connection to the database " + err);
            return false;
        }
        console.log("Connected!");
        var sql = "INSERT INTO admins (userId, tagId) VALUES (" + playerUUID + ", 1)";
        mysqlConnection.query(sql, function (err, result) {
            if (err) {
                console.log("error while inserting a user as admin " + err);
                return false;
            }   
            return true;
        });
    });
}

export { setAdmin }
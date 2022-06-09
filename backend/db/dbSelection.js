import { mysqlConnection } from "./dbConnection.js";

/**
 * Checks if a user is an admin
 * @param {} playerUUID 
 * @returns 
 */
export function isAdmin(playerUUID) {
    return mysqlConnection.connect(function(err) {
        if (err) {
            console.log("error during connection to the database " + err);
            return false
        };
        mysqlConnection.query("SELECT id FROM admins WHERE userId = " + playerUUID, function (err, result) {
          if (err) {
              console.log("an error occured while selecting from the database")
              return false;
          };
          return result.length > 0 ? true : false;
        });
    });
}
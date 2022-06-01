import mysql.connector
import os
from dotenv import load_dotenv

"""
load .env information and make the basic database connection
"""
load_dotenv()

DATABASE_HOST = os.getenv('DATABASE_HOST')
DATABASE_USER = os.getenv('DATABASE_USER')
DATABASE_PASSWORD = os.getenv('DATABASE_PASSWORD')

db = mysql.connector.connect(
    host=DATABASE_HOST,
    user=DATABASE_USER,
    password=DATABASE_PASSWORD,
    database="workadventureadmin"
)

"""
Add a new player as an Admin to the game (id 1 from tags references the admin Tag)
TODO: Select the admin tag by a select statement instead of hard coding its id
"""
def insert_admin(playerUuid: str):
    if not check_if_user_is_admin(playerUuid):
        cursor = db.cursor()

        sql = "INSERT INTO admins (userId, tagId) VALUES (%s, %s)"
        val = (playerUuid, 1,)
        cursor.execute(sql, val)

        db.commit()
        return "successfull"
    else:
        return "user is already an admin"


"""
Removes a given player from the admin table
"""
def remove_admin(playerUuid: str):
    cursor = db.cursor()

    sql = "DELETE From admins WHERE userId = %s"
    val = (playerUuid,)
    cursor.execute(sql, val)

    db.commit()
    return "successfull"


"""
Returns true if a specific member exists in the admin table
"""
def check_if_user_is_admin(playerUuid: str):
    cursor = db.cursor()

    sql = "SELECT * FROM admins WHERE userId = %s"
    val = (playerUuid,)

    cursor.execute(sql, val)

    select_result = cursor.fetchall()

    return len(select_result) > 0

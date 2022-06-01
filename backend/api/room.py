import json
from fastapi import APIRouter
from database.connection import check_if_user_is_admin

router = APIRouter(prefix="/admin/api/room")

"""
Check if the user has access to a specific room
Check and returns the tag of an User
Gets a list of the available textures on the server
"""
@router.get("/access")
async def room_access(userIdentifier, playUri, ipAddress):
    """
    The room-access-endpoint. It returns a static JSON.
    """

    with open("./resources/wokaList.json", 'r', encoding='utf-8') as woka_file:
        textures = json.load(woka_file)

    user_tag = "admin" if check_if_user_is_admin(userIdentifier) else "user"
    
    return {
        "email": "",
        "userUuid": userIdentifier,
        "tags": [user_tag],
        "visitCardUrl": None,
        "textures": textures["data"],
        "messages": [],
        "anonymous": True
    }

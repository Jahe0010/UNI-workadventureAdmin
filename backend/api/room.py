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

    textures = [
        {"id": "male1", "url": "resources/characters/pipoya/Male 01-1.png"},
        {"id": "male2", "url": "resources/characters/pipoya/Male 02-2.png"},
        {"id": "male3", "url": "resources/characters/pipoya/Male 03-4.png"},
        {"id": "male4", "url": "resources/characters/pipoya/Male 09-1.png"},
        {"id": "male5", "url": "resources/characters/pipoya/Male 10-3.png"},
        {"id": "male6", "url": "resources/characters/pipoya/Male 17-2.png"},
        {"id": "male7", "url": "resources/characters/pipoya/Male 18-1.png"},
        {"id": "male8", "url": "resources/characters/pipoya/Male 16-4.png"},
        {"id": "male9", "url": "resources/characters/pipoya/Male 07-2.png"},
        {"id": "male10", "url": "resources/characters/pipoya/Male 05-3.png"},
        {"id": "male11", "url": "resources/characters/pipoya/Teacher male 02.png"},
        {"id": "male12", "url": "resources/characters/pipoya/su4 Student male 12.png"},
        {"id": "Female1", "url": "resources/characters/pipoya/Female 01-1.png"},
        {"id": "Female2", "url": "resources/characters/pipoya/Female 02-2.png"},
        {"id": "Female3", "url": "resources/characters/pipoya/Female 03-4.png"},
        {"id": "Female4", "url": "resources/characters/pipoya/Female 09-1.png"},
        {"id": "Female5", "url": "resources/characters/pipoya/Female 10-3.png"},
        {"id": "Female6", "url": "resources/characters/pipoya/Female 17-2.png"},
        {"id": "Female7", "url": "resources/characters/pipoya/Female 18-1.png"},
        {"id": "Female8", "url": "resources/characters/pipoya/Female 16-4.png"},
        {"id": "Female9", "url": "resources/characters/pipoya/Female 07-2.png"},
        {"id": "Female10", "url": "resources/characters/pipoya/Female 05-3.png"},
        {"id": "Female11", "url": "resources/characters/pipoya/Teacher fmale 02.png"},
        {"id": "Female12", "url": "resources/characters/pipoya/su4 Student fmale 12.png"}
    ]

    user_tag = "admin" if check_if_user_is_admin(userIdentifier) else "user"

    return {
        "email": "",
        "userUuid": userIdentifier,
        "tags": [user_tag],
        "visitCardUrl": None,
        "textures": textures,
        "messages": [],
        "anonymous": True
    }

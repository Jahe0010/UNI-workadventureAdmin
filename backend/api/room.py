import json
from fastapi import APIRouter, Request

router = APIRouter(prefix="/admin/api/room")


@router.get("/access")
async def room_access(userIdentifier, playUri, ipAddress):
    """
    The room-access-endpoint. It returns a static JSON.
    """

    with open("../resources/wokaList.json", 'r', encoding='utf-8') as wokaFile:
        textures = json.loads(wokaFile);
        
    return {
        "email": "",
        "userUuid": userIdentifier,
        "tags": ["user"],
        "visitCardUrl": None,
        "textures": textures["data"],
        "messages": [],
        "anonymous": True
    }

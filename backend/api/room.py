from fastapi import APIRouter, Request

router = APIRouter(prefix="/admin/api/room")


@router.get("/access")
async def room_access(userIdentifier, playUri, ipAddress):
    """
    The room-access-endpoint. It returns a static JSON.
    """

    return {
        "email": "",
        "userUuid": userIdentifier,
        "tags": ["user"],
        "visitCardUrl": None,
        "textures": [{"id": "male1", "url": "resources/characters/pipoya/Male 01-1.png"}],
        "messages": [],
        "anonymous": False
    }

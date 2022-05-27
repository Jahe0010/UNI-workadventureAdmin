from fastapi import APIRouter, Request

router = APIRouter(prefix="/admin/api/room")


@router.get("/access")
async def room_access(userIdentifier, playUri, ipAddress):
    """
    The room-access-endpoint. It returns a static JSON.
    """

    return {
        "email": "",
        "userUuid": "",
        "tags": ["admin"],
        "visitCardUrl": None,
        "textures": [],
        "messages": [],
        "anonymous": True,
        "userRoomToken": ""
    }

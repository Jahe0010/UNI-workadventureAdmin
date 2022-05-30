from fastapi import APIRouter

router = APIRouter(prefix="/admin/api")


@router.post("/tag")
async def tag(playerUuid):
    """
    The map-endpoint. It returns a static JSON.
    """
    return "successfull"

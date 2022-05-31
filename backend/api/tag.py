from fastapi import APIRouter

router = APIRouter(prefix="/admin/api")

"""
Post request that takes the uuid of the player that will be promoted to an admin or demoted from the admin position
"""
@router.post("/tag")
async def tag(playerUuid, action):
    """
    The map-endpoint. It returns a static JSON.
    """
    return "successfull"

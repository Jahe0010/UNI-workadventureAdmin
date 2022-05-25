from fastapi import APIRouter

router = APIRouter(prefix="/adminApi")


@router.get("/map")
async def alive():
    """
    The map-endpoint. It returns a static JSON.
    """
    return {
        "mapUrl": "play.hs-kl.de/maps/zw/zw.json"
    }

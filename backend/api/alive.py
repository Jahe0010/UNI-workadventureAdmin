from fastapi import APIRouter

router = APIRouter(prefix="/adminApi")


@router.get("/alive")
async def alive():
    """
    The alive-endpoint. It returns a static JSON.
    """
    return {"hello": f"I am alive! I am a workadventure Admin API! Developed by Scrumbledore!"}

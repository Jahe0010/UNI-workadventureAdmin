from fastapi import APIRouter

router = APIRouter(prefix="/admin/api")

"""
Simple alive endpoint to see if it works
"""
@router.get("/alive")
async def alive():
    """
    The alive-endpoint. It returns a static JSON.
    """
    return {"hello": f"I am alive! I am a workadventure Admin API! Developed by Scrumbledore!"}

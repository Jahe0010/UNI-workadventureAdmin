import json
from fastapi import APIRouter

router = APIRouter(prefix="/admin/api/woka")

"""
returns a woka list
"""


@router.get("/list")
async def get_woka_list(userIdentifier, playUri, ipAddress):
    """
    The room-access-endpoint. It returns a static JSON.
    """

    with open("./resources/wokaList.json", 'r', encoding='utf-8') as woka_file:
        textures = json.load(woka_file)

    return json.dump(textures["data"])

import json
from fastapi import APIRouter

router = APIRouter(prefix="/admin/api/woka")

"""
returns a woka list
"""


@router.get("/list")
async def get_woka_list(roomUrl, uuid):
    """
    The room-access-endpoint. It returns a static JSON.
    """

    with open('./resources/wokaList.json') as json_file:
        woka_list = json.load(json_file)

    return woka_list

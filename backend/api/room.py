import json
from fastapi import APIRouter
from database.connection import check_if_user_is_admin

router = APIRouter(prefix="/admin/api/room")

with open('./resources/wokaList.json') as json_file:
    woka_list = json.load(json_file)

def get_all_textures():
    wokas = []
    for groupName in woka_list:
        group = woka_list[groupName]
        for collection in group["collections"]:
            for texture in collection["textures"]:
                wokas.append({
                    "id": texture.id,
                    "url": texture.url,
                    "layer": groupName
                })
    return wokas

"""
Check if the user has access to a specific room
Check and returns the tag of an User
Gets a list of the available textures on the server
"""


@router.get("/access")
async def room_access(userIdentifier, playUri, ipAddress, characterLayers=None):
    """
    The room-access-endpoint. It returns a static JSON.
    """

    character_layers = characterLayers if characterLayers else []

    # Notice that we filter the textures based on the user selection (given on characterLayers)
    textures = filter(lambda woka : characterLayers.indexOf(woka.id) is not -1, get_all_textures())

    # make sure to preserve the texture order (given on character_layers)
    textures = [x for _,x in sorted(zip(character_layers,textures))]
    user_tag = "admin" if check_if_user_is_admin(userIdentifier) else "user"

    return {
        "email": "user@user",
        "userUuid": userIdentifier,
        "tags": [user_tag],
        "visitCardUrl": None,
        "textures": textures,
        "messages": [],
        "anonymous": True
    }

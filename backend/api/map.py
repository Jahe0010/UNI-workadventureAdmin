from fastapi import APIRouter
import urllib.parse

router = APIRouter(prefix="/admin/api")

"""
Returns the map object more information about that can be found on the official workadventure documentation
"""
@router.get("/map")
async def map(playUri):
    """
    The map-endpoint. It returns a static JSON.
    """
    map_url = urllib.parse.unquote(playUri)
    map_url = map_url.strip("global/")[1]
    print(map_url)
    
    return {
        "mapUrl": map_url,
        "policy_type": 1,
        "tags": [],
        "authenticationMandatory": False,
        "roomSlug": None,
        "contactPage": None,
        "group": None,
        "iframeAuthentication": None,
        "miniLogo": None,
        "loadingLogo": None,
        "loginSceneLogo": None,
        "showPoweredBy": True,
        "loadingCowebsiteLogo": None
    }

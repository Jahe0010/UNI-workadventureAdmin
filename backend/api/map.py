from fastapi import APIRouter

router = APIRouter(prefix="/admin/api")

"""
Returns the map object more information about that can be found on the official workadventure documentation
"""
@router.get("/map")
async def map(playUri):
    """
    The map-endpoint. It returns a static JSON.
    """
    return {
        "mapUrl": "zwoogle3.informatik.hs-kl.de/workadventuregroup/workadventure/-/raw/main/Scrumblezen/maps/zw/zw.json",
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

from fastapi import APIRouter

router = APIRouter(prefix="/admin/api")


@router.get("/map")
async def map():
    """
    The map-endpoint. It returns a static JSON.
    """
    return {
        "mapUrl": "https://play.hs-kl.de/maps/zw/zw.json",
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

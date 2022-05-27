from fastapi import APIRouter, Request
import json

router = APIRouter(prefix="/admin/api/room")


@router.get("/access")
async def room_access(request: Request):
    """
    The room-access-endpoint. It returns a static JSON.
    """
    print(json.dumps(request))
    return {
        "mapUrl": "play.hs-kl.de/maps/zw/zw.json",
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

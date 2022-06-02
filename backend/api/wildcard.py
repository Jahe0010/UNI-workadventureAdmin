from fastapi import APIRouter

router = APIRouter(prefix="/admin/api")


@router.post("*")
async def wildcard():
    """
    The wildcard-endpoint. Empty return.
    """
    return {}

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

    return {
        "woka": {
            "collections": [
                {
                    "name": "Default Collection",
                    "textures": [
                        {"id": "male1", "url": "wokas/resources/characters/pipoya/Male 01-1.png"},
                        {"id": "male2", "url": "wokas/resources/characters/pipoya/Male 02-2.png"},
                        {"id": "male3", "url": "wokas/resources/characters/pipoya/Male 03-4.png"},
                        {"id": "male4", "url": "wokas/resources/characters/pipoya/Male 09-1.png"},
                        {"id": "male5", "url": "wokas/resources/characters/pipoya/Male 10-3.png"},
                        {"id": "male6", "url": "wokas/resources/characters/pipoya/Male 17-2.png"},
                        {"id": "male7", "url": "wokas/resources/characters/pipoya/Male 18-1.png"},
                        {"id": "male8", "url": "wokas/resources/characters/pipoya/Male 16-4.png"},
                        {"id": "male9", "url": "wokas/resources/characters/pipoya/Male 07-2.png"},
                        {"id": "male10", "url": "wokas/resources/characters/pipoya/Male 05-3.png"},
                        {"id": "male11", "url": "wokas/resources/characters/pipoya/Teacher male 02.png"},
                        {"id": "male12", "url": "wokas/resources/characters/pipoya/su4 Student male 12.png"},

                        {"id": "Female1", "url": "wokas/resources/characters/pipoya/Female 01-1.png"},
                        {"id": "Female2", "url": "wokas/resources/characters/pipoya/Female 02-2.png"},
                        {"id": "Female3", "url": "wokas/resources/characters/pipoya/Female 03-4.png"},
                        {"id": "Female4", "url": "wokas/resources/characters/pipoya/Female 09-1.png"},
                        {"id": "Female5", "url": "wokas/resources/characters/pipoya/Female 10-3.png"},
                        {"id": "Female6", "url": "wokas/resources/characters/pipoya/Female 17-2.png"},
                        {"id": "Female7", "url": "wokas/resources/characters/pipoya/Female 18-1.png"},
                        {"id": "Female8", "url": "wokas/resources/characters/pipoya/Female 16-4.png"},
                        {"id": "Female9", "url": "wokas/resources/characters/pipoya/Female 07-2.png"},
                        {"id": "Female10", "url": "wokas/resources/characters/pipoya/Female 05-3.png"},
                        {"id": "Female11", "url": "wokas/resources/characters/pipoya/Teacher fmale 02.png"},
                        {"id": "Female12", "url": "wokas/resources/characters/pipoya/su4 Student fmale 12.png"}
                    ]
                }
            ]
        }
    }

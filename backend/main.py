import uvicorn
from fastapi import FastAPI
from api import alive, map, room, tag, woka

# Initialize Workadventure Backend
wb = FastAPI(
    title="Workadventure Backend",
    description="A simple REST-Service for providing Admin APIs for Workadventure",
    debug=False
)

wb.include_router(alive.router)
wb.include_router(map.router)
wb.include_router(room.router)
wb.include_router(tag.router)
wb.include_router(woka.router)

if __name__ == "__main__":
    uvicorn.run(wb, host="0.0.0.0", port=80)

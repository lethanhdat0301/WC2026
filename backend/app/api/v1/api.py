from fastapi import APIRouter

from app.api.v1.endpoints.health import router as health_router
from app.api.v1.endpoints.teams import router as teams_router

api_router = APIRouter()
api_router.include_router(health_router)
api_router.include_router(teams_router)
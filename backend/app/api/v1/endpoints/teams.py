from fastapi import APIRouter, Depends
from sqlalchemy import select
from sqlalchemy.ext.asyncio import AsyncSession

from app.database.session import get_db
from app.models.team import Team

router = APIRouter(prefix="/teams", tags=["teams"])


@router.get("/test")
async def get_teams_test(db: AsyncSession = Depends(get_db)) -> list[dict[str, str | int | None]]:
    result = await db.execute(select(Team).order_by(Team.id))
    teams = result.scalars().all()
    return [
        {
            "id": team.id,
            "api_id": team.api_id,
            "name": team.name,
            "logo": team.logo,
            "country": team.country,
            "group_name": team.group_name,
        }
        for team in teams
    ]

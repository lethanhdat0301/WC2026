from datetime import datetime

from sqlalchemy import DateTime, ForeignKey, Integer, String
from sqlalchemy.orm import Mapped, mapped_column, relationship

from app.database.session import Base


class Match(Base):
    __tablename__ = "matches"

    id: Mapped[int] = mapped_column(Integer, primary_key=True, autoincrement=True)
    api_id: Mapped[int] = mapped_column(Integer, unique=True, index=True)
    home_team_id: Mapped[int] = mapped_column(Integer, ForeignKey("teams.id"))
    away_team_id: Mapped[int] = mapped_column(Integer, ForeignKey("teams.id"))
    home_score: Mapped[int | None] = mapped_column(Integer)
    away_score: Mapped[int | None] = mapped_column(Integer)
    status: Mapped[str] = mapped_column(String(50), index=True)
    match_date: Mapped[datetime] = mapped_column(DateTime(timezone=True), index=True)
    stage: Mapped[str | None] = mapped_column(String(100))
    venue: Mapped[str | None] = mapped_column(String(200))

    home_team: Mapped["Team"] = relationship(
        "Team", foreign_keys=[home_team_id], back_populates="home_matches"
    )
    away_team: Mapped["Team"] = relationship(
        "Team", foreign_keys=[away_team_id], back_populates="away_matches"
    )
    events: Mapped[list["MatchEvent"]] = relationship("MatchEvent", back_populates="match")


class MatchEvent(Base):
    __tablename__ = "match_events"

    id: Mapped[int] = mapped_column(Integer, primary_key=True, autoincrement=True)
    match_id: Mapped[int] = mapped_column(Integer, ForeignKey("matches.id"), index=True)
    minute: Mapped[int | None] = mapped_column(Integer)
    event_type: Mapped[str] = mapped_column(String(50))
    team_id: Mapped[int | None] = mapped_column(Integer, ForeignKey("teams.id"))
    player_name: Mapped[str | None] = mapped_column(String(150))
    detail: Mapped[str | None] = mapped_column(String(100))

    match: Mapped["Match"] = relationship("Match", back_populates="events")
"""init schema

Revision ID: 8b1406479b52
Revises: 
Create Date: 2026-06-09 21:48:14.187982

"""
from typing import Sequence, Union

from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision: str = '8b1406479b52'
down_revision: Union[str, None] = None
branch_labels: Union[str, Sequence[str], None] = None
depends_on: Union[str, Sequence[str], None] = None


def upgrade() -> None:
    op.create_table(
        "teams",
        sa.Column("id", sa.Integer(), autoincrement=True, nullable=False),
        sa.Column("api_id", sa.Integer(), nullable=False),
        sa.Column("name", sa.String(length=100), nullable=False),
        sa.Column("logo", sa.String(length=500), nullable=True),
        sa.Column("country", sa.String(length=100), nullable=True),
        sa.Column("group_name", sa.String(length=10), nullable=True),
        sa.PrimaryKeyConstraint("id"),
        sa.UniqueConstraint("api_id"),
    )
    op.create_index(op.f("ix_teams_api_id"), "teams", ["api_id"], unique=True)

    op.create_table(
        "matches",
        sa.Column("id", sa.Integer(), autoincrement=True, nullable=False),
        sa.Column("api_id", sa.Integer(), nullable=False),
        sa.Column("home_team_id", sa.Integer(), nullable=False),
        sa.Column("away_team_id", sa.Integer(), nullable=False),
        sa.Column("home_score", sa.Integer(), nullable=True),
        sa.Column("away_score", sa.Integer(), nullable=True),
        sa.Column("status", sa.String(length=50), nullable=False),
        sa.Column("match_date", sa.DateTime(timezone=True), nullable=False),
        sa.Column("stage", sa.String(length=100), nullable=True),
        sa.Column("venue", sa.String(length=200), nullable=True),
        sa.ForeignKeyConstraint(["away_team_id"], ["teams.id"]),
        sa.ForeignKeyConstraint(["home_team_id"], ["teams.id"]),
        sa.PrimaryKeyConstraint("id"),
        sa.UniqueConstraint("api_id"),
    )
    op.create_index(op.f("ix_matches_api_id"), "matches", ["api_id"], unique=True)
    op.create_index(op.f("ix_matches_match_date"), "matches", ["match_date"], unique=False)
    op.create_index(op.f("ix_matches_status"), "matches", ["status"], unique=False)

    op.create_table(
        "players",
        sa.Column("id", sa.Integer(), autoincrement=True, nullable=False),
        sa.Column("api_id", sa.Integer(), nullable=False),
        sa.Column("team_id", sa.Integer(), nullable=False),
        sa.Column("name", sa.String(length=150), nullable=False),
        sa.Column("position", sa.String(length=50), nullable=True),
        sa.Column("age", sa.Integer(), nullable=True),
        sa.Column("number", sa.Integer(), nullable=True),
        sa.Column("photo", sa.String(length=500), nullable=True),
        sa.ForeignKeyConstraint(["team_id"], ["teams.id"]),
        sa.PrimaryKeyConstraint("id"),
        sa.UniqueConstraint("api_id"),
    )
    op.create_index(op.f("ix_players_api_id"), "players", ["api_id"], unique=True)

    op.create_table(
        "match_events",
        sa.Column("id", sa.Integer(), autoincrement=True, nullable=False),
        sa.Column("match_id", sa.Integer(), nullable=False),
        sa.Column("minute", sa.Integer(), nullable=True),
        sa.Column("event_type", sa.String(length=50), nullable=False),
        sa.Column("team_id", sa.Integer(), nullable=True),
        sa.Column("player_name", sa.String(length=150), nullable=True),
        sa.Column("detail", sa.String(length=100), nullable=True),
        sa.ForeignKeyConstraint(["match_id"], ["matches.id"]),
        sa.ForeignKeyConstraint(["team_id"], ["teams.id"]),
        sa.PrimaryKeyConstraint("id"),
    )
    op.create_index(op.f("ix_match_events_match_id"), "match_events", ["match_id"], unique=False)


def downgrade() -> None:
    op.drop_index(op.f("ix_match_events_match_id"), table_name="match_events")
    op.drop_table("match_events")

    op.drop_index(op.f("ix_players_api_id"), table_name="players")
    op.drop_table("players")

    op.drop_index(op.f("ix_matches_status"), table_name="matches")
    op.drop_index(op.f("ix_matches_match_date"), table_name="matches")
    op.drop_index(op.f("ix_matches_api_id"), table_name="matches")
    op.drop_table("matches")

    op.drop_index(op.f("ix_teams_api_id"), table_name="teams")
    op.drop_table("teams")

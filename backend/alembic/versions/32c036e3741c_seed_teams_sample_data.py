"""seed teams sample data

Revision ID: 32c036e3741c
Revises: 8b1406479b52
Create Date: 2026-06-09 21:50:05.064313

"""
from typing import Sequence, Union

from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision: str = '32c036e3741c'
down_revision: Union[str, None] = '8b1406479b52'
branch_labels: Union[str, Sequence[str], None] = None
depends_on: Union[str, Sequence[str], None] = None


def upgrade() -> None:
    teams_table = sa.table(
        "teams",
        sa.column("api_id", sa.Integer()),
        sa.column("name", sa.String(length=100)),
        sa.column("logo", sa.String(length=500)),
        sa.column("country", sa.String(length=100)),
        sa.column("group_name", sa.String(length=10)),
    )

    op.bulk_insert(
        teams_table,
        [
            {
                "api_id": 1001,
                "name": "Argentina",
                "logo": "https://example.com/teams/argentina.png",
                "country": "Argentina",
                "group_name": "A",
            },
            {
                "api_id": 1002,
                "name": "France",
                "logo": "https://example.com/teams/france.png",
                "country": "France",
                "group_name": "B",
            },
            {
                "api_id": 1003,
                "name": "Brazil",
                "logo": "https://example.com/teams/brazil.png",
                "country": "Brazil",
                "group_name": "C",
            },
            {
                "api_id": 1004,
                "name": "Japan",
                "logo": "https://example.com/teams/japan.png",
                "country": "Japan",
                "group_name": "D",
            },
        ],
    )


def downgrade() -> None:
    op.execute(
        sa.text("DELETE FROM teams WHERE api_id IN (1001, 1002, 1003, 1004)")
    )

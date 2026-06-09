import asyncio
import subprocess
import sys

from sqlalchemy import text

from app.core.config import settings
from app.database.session import engine


async def drop_and_recreate_public_schema() -> None:
    async with engine.begin() as conn:
        await conn.execute(text("DROP SCHEMA IF EXISTS public CASCADE"))
        await conn.execute(text("CREATE SCHEMA public"))


def upgrade_head() -> None:
    subprocess.run([sys.executable, "-m", "alembic", "upgrade", "head"], check=True)


def main() -> None:
    asyncio.run(drop_and_recreate_public_schema())
    upgrade_head()
    print("Development database reset completed.")


if __name__ == "__main__":
    main()

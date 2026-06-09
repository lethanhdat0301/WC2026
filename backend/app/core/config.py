from pydantic_settings import BaseSettings


class Settings(BaseSettings):
    DATABASE_URL: str = "postgresql+asyncpg://postgres:postgres@localhost:5432/wc2026"
    API_FOOTBALL_KEY: str = ""
    API_FOOTBALL_HOST: str = "v3.football.api-sports.io"
    WC2026_LEAGUE_ID: int = 1
    APP_ENV: str = "development"
    SECRET_KEY: str = "changeme"
    ALLOWED_ORIGINS: list[str] = ["http://localhost:5173"]
    SYNC_INTERVAL_MINUTES: int = 15

    class Config:
        env_file = ".env"


settings = Settings()
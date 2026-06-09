# WC2026 Backend

Backend service is built with FastAPI, SQLAlchemy async, Alembic, and PostgreSQL.

## 1) Requirements

- Python 3.12+
- PostgreSQL running locally
- Windows PowerShell (commands below are PowerShell style)

## 2) Setup

From project root:

1. Go to backend folder.
2. Create and activate virtual environment.
3. Install dependencies.
4. Create local environment file from template.

PowerShell commands:

- `Set-Location backend`
- `python -m venv venv`
- `.\venv\Scripts\Activate.ps1`
- `python -m pip install -r requirements.txt`
- `Copy-Item .env.example .env`

Then edit `.env` with your real values if needed.

## 3) Run Database Migration

Apply all migrations to local PostgreSQL:

- `alembic upgrade head`

Current migration chain:

- init schema
- seed sample teams

## 4) Start API Server

Run FastAPI server with reload:

- `uvicorn app.main:app --reload`

Default API base:

- http://127.0.0.1:8000/api/v1

## 5) Verify End-to-End Quickly

Health check:

- GET http://127.0.0.1:8000/api/v1/health

Sample teams endpoint:

- GET http://127.0.0.1:8000/api/v1/teams/test

Expected result: list of seeded teams (Argentina, France, Brazil, Japan).

## 6) Reset Development Database

Reset local DB schema and re-run all migrations:

- `python -m scripts.reset_dev_db`

What this script does:

1. Drop schema public (cascade)
2. Re-create schema public
3. Run alembic upgrade head

## 7) Project Structure (Backend)

- `app/main.py`: FastAPI app entrypoint
- `app/core/config.py`: environment settings
- `app/database/session.py`: async engine, session, Base, get_db
- `app/models/`: SQLAlchemy models
- `app/api/v1/endpoints/`: API endpoints
- `alembic/`: migration environment and revisions
- `scripts/reset_dev_db.py`: development DB reset script

## 8) Notes For Git

- Do not commit `.env`.
- Commit `.env.example` for team setup.
- Commit Alembic revisions whenever schema changes.

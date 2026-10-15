# KudiAI Voice

An open-source, voice-enabled AI business assistant for small businesses.

## Current milestone
This initial scaffold provides a Django API health endpoint, a React + TypeScript + Vite interface shell, PostgreSQL development configuration, Docker Compose, and non-deploying CI. Business workflows, authentication, AI inference, and Agora voice are not implemented yet.

## Stack
- Frontend: React, TypeScript, Vite
- Backend: Python, Django, Django REST Framework
- Database: PostgreSQL
- Planned AI: an Ollama-compatible open-weight model, subject to model-license review
- Planned voice: Agora RTC plus a separately configured speech-to-text pipeline
- Checks: Django tests, TypeScript checks, Vite production build, GitHub Actions

## Run locally
1. Clone the repository and enter its directory.
2. Copy `.env.example` to `.env`.
3. Run `docker compose up --build`.
4. Open http://localhost:5173/ and check API health at http://localhost:8000/api/health/.

The initial scaffold is a foundation, not a finished business application.

## Development without Docker
Backend: `cd backend`, create/activate a virtual environment, run `pip install -r requirements.txt`, then `python manage.py test` and `python manage.py runserver`.

Frontend: `cd frontend`, run `npm install`, `npm run check`, `npm run build`, then `npm run dev`.

## Planned milestones
1. Foundation and CI.
2. Authentication, business tenancy, and authorization.
3. Products, stock movements, sales, and expenses.
4. Backend-calculated financial reporting.
5. Business-grounded AI using an open-weight model.
6. Secure Agora token issuance and speech-to-text.
7. Production hardening and deployment documentation.

## Security principles
- Authorization, stock movements, and financial calculations belong in backend code.
- AI must only use data the authenticated user is authorized to access.
- Never commit real credentials or customer data.
- Never expose Agora App Certificates or provider secrets to the browser.
- Review third-party dependency and model licenses before distribution.

See [CONTRIBUTING.md](CONTRIBUTING.md). Licensed under Apache-2.0; third-party components retain their own licenses.

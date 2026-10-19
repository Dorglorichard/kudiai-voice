# Contributing

Thanks for contributing to KudiAI Voice. Keep changes focused, tested, documented, and secure.

- Check existing issues before starting substantial work.
- Add or update tests for changed behavior.
- Document API and environment changes.
- Never commit credentials, customer data, or production exports.
- Review dependency and AI model licenses before introducing them.

Backend checks: `cd backend && pip install -r requirements.txt && python manage.py test`.
Frontend checks: `cd frontend && npm install && npm run check && npm run build`.

Pull requests should explain the problem, changes, tests run, and known limitations. Follow the Code of Conduct.

# MN Dev Studio

A modern, responsive single-page portfolio built with React, Vite, and Tailwind CSS.

## Quick start

Install dependencies and run the dev server:

```bash
npm install
npm run dev
```

Project structure:

- `index.html` — app entry
- `src/` — React source
- `src/components/` — UI components
- `tailwind.config.cjs` — Tailwind config

## Contact form backend

The contact form posts to a small Flask email backend.

1. Install Python 3 if `python --version` does not work.
2. Install Flask and dotenv into the backend virtual environment:

```bash
npm run backend:install
```

3. Copy `.env.example` to `.env`.
4. Set `GMAIL_USER`, `GMAIL_APP_PASSWORD`, and `RECEIVER_EMAIL`.
5. Start the backend in one terminal:

```bash
npm run backend
```

6. Start the Vite app in another terminal:

```bash
npm run dev
```

To send a test email through the backend without opening the React app:

```bash
npm run backend:test
```

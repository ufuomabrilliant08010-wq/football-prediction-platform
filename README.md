# football-prediction-platform

A modern football prediction platform built with Next.js, React, TypeScript, and Tailwind CSS.

## Features

- Premium sportsbook-inspired UI with dark mode
- Real-world football fixtures across top leagues
- Match detail pages with live statistics and markets
- Virtual coin wallet and settlement model
- Prediction slip and bet history
- Leaderboard, competitions, and private league invites
- Admin dashboard and user account views
- Scalable architecture for real API integration

## Stack

- Next.js 14
- React 18
- TypeScript
- Tailwind CSS
- Lucide Icons

## Getting started

```bash
npm install
npm run dev
```

Then open http://localhost:3000

## Production build

```bash
npm run build
npm run start
```

## Important legal notice

This project is a demo / MVP that uses virtual currency only. It does not include real-money deposits, withdrawals, gambling mechanics, or cash payouts. All token calculations are examples for UI and simulation purposes.

## Architecture overview

- Frontend: Next.js app router UI
- Data layer: prepared mock data layer for leagues, fixtures, users, wallet activity, and competitions
- Integration layer: ready for football API providers, auth, notifications, and settlement services
- Persistence: PostgreSQL / Supabase-ready schema pattern
- Realtime updates: web sockets or polling layer for live scores

## Project structure

- `app/` - pages and layouts
- `components/` - reusable UI components
- `lib/` - mock data and helpers
- `docs/` - system design notes

## License

MIT

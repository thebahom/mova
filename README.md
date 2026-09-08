# MOVAARA

Move. Arrive. Belong.

## Current MVP build

MOVAARA is a UK-first migration journey product built around a dynamic Journey Graph.

### Working product surfaces
- Landing page with origin/destination/purpose journey builder
- Conversational onboarding
- Dashboard with task completion
- Responsive mobile-first layouts and immersive motion-led presentation

## Run

```bash
npm install
npm run dev
```

Then verify with:

```bash
npm run typecheck
npm run build
```

## Deployment

The project is configured as a standard Next.js app for Vercel. Production deploys from the `main` branch through the connected GitHub repository.

The deployment pipeline intentionally uses standalone CSS so the landing experience does not depend on a PostCSS/Tailwind build plugin.

## Production safety

Regulated immigration requirements are demonstration content unless explicitly verified through an authoritative source. Do not treat MVP data as legal advice or production-ready regulatory content.

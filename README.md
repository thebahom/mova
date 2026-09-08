# MOVAARA

Move. Arrive. Belong.

## Current MVP build

MOVAARA is a UK-first migration journey product built around a dynamic Journey Graph.

### Working product surfaces
- Landing page with origin/destination/purpose journey builder
- Conversational onboarding
- Dynamic Journey Graph with task completion
- Dashboard with readiness by area and "Here's what you should do next"
- Family mode that injects dependant, education and healthcare tasks
- Route explorer with UK route comparison
- City comparison for London, Manchester, Birmingham, Liverpool and Chester
- Country intelligence, visa, cost, documents, Near Me, My Life and Ask MOVAARA surfaces
- Source/provenance boundary and explicit demo-data safety labelling
- Prisma/PostgreSQL schema boundary
- Auth.js configuration boundary
- Responsive mobile-first layouts and PWA manifest

## Run

```bash
npm install
cp .env.example .env
npm run dev
```

Then use:

```bash
npm run typecheck
npm run lint
npm test
npm run build
```

### Verification note

This workspace did not have dependencies installed and the `npm install` attempt timed out, so a full Next.js build/lint/test execution could not be completed here. The source was updated directly and the dependency-independent journey rule logic was checked with TypeScript's parser/type analysis where possible.

## Production safety

Regulated immigration requirements are demonstration content unless explicitly verified through an authoritative source. Do not treat MVP data as legal advice or production-ready regulatory content.

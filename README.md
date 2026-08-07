# TCAST Cargo corporate website

Production-ready bilingual corporate website for **TCAST Cargo & Clearing Ltd**, built with Next.js App Router, TypeScript and Tailwind CSS.

This is the **public-facing** project — company pages, service information, contact/quote forms, and live shipment tracking. It is intentionally a separate repository from the internal staff tool, [`tcast-cargo-webapp`](https://github.com/tcast2026/tcast-cargo-webapp) (private), which is where shipments, customers, payments and expenses are actually managed. This site never stores its own copy of shipment data — the tracking page reads live from the same Supabase project the Cargo App writes to.

## Local development

```bash
npm install
npm run dev
```

Quality checks:

```bash
npm run lint
npm run typecheck
npm run build
```

## Languages and routes

- English: `/en`
- Kiswahili: `/sw`
- `/` redirects to `/en`

Every primary page and service page is pre-rendered in both languages. Content, service data, FAQs and company details are structured under `src/data`, `src/i18n` and `src/config`.

## Environment variables

Copy `.env.example` to `.env.local` and set only the integrations being enabled.

- `NEXT_PUBLIC_SITE_URL` — canonical website URL.
- `SMTP_HOST`, `SMTP_PORT`, `SMTP_SECURE`, `SMTP_USER`, `SMTP_PASSWORD` — secure server-side contact and quote email delivery.
- `QUOTE_EMAIL_TO` — quote/contact destination; defaults to `tahilcast@gmail.com`.
- `SUPABASE_URL`, `SUPABASE_ANON_KEY` — the shared Supabase project's URL and **publishable** key (never the service_role key — this app should never hold it). The tracking API route (`src/app/api/tracking/route.ts`) calls a single `track_shipment()` RPC that reads shipment data written by the Cargo App; the website never stores its own shipment records and can't query any table directly (Row Level Security blocks it — only the RPC is granted to this key). Schema/migrations live in the `tcast-cargo-webapp` repo under `supabase/migrations`.
- `ALLOWED_FORM_ORIGINS` — comma-separated trusted production origins.

No secret is exposed to browser code. When SMTP or shipment tracking is not configured, the website shows a clear contact alternative and does not claim success or display sample shipment data.

## Deployment

Configured for Netlify (see `netlify.toml`). Add the environment variables above to the Netlify site's build settings, deploy, then verify the production domain, email delivery, maps and the live Supabase tracking data.

See [IMAGE-SOURCES.md](./IMAGE-SOURCES.md) for licensed photography and brand-asset notes.

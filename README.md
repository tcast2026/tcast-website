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
- `NEXT_PUBLIC_SUPABASE_URL`, `NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY` — use the same project as the Cargo App (`pacxxkmttvvestwjskjq`). The tracking form calls `/api/tracking`; the server applies an IP rate limit and invokes `track_shipment()` with the publishable key. Never configure a service-role/secret key here. Responses use `no-store`, so every search reads the current app data. The rate limit is per server instance; use an infrastructure rate limit for a strict distributed limit. The public RPC is still directly accessible with the publishable key, so website rate limiting alone does not prevent direct RPC enumeration. Schema/migrations live in the Cargo App repo.
- `ALLOWED_FORM_ORIGINS` — comma-separated trusted production origins.

No secret is exposed to browser code. When SMTP or shipment tracking is not configured, the website shows a clear contact alternative and does not claim success or display sample shipment data.

## Deployment

Configured for Netlify (see `netlify.toml`). Add the environment variables above to the Netlify site's build settings, deploy, then verify the production domain, email delivery, maps and the live Supabase tracking data.

See [IMAGE-SOURCES.md](./IMAGE-SOURCES.md) for licensed photography and brand-asset notes.

## Tanzania contact and tracking release verification

GitHub main already changed the office number on 2026-10-09 (commit `2d35662`): the previous number was removed and `+255671711333` is used by the footer, contact page and telephone links via `company.ts`. Deploy this repository to the actual website host, then check `https://www.tcastcargo.com/en/contact` and `/sw/contact`. A GitHub commit alone does not prove that the hosted website has rebuilt.

Set both Supabase variables in the website host, redeploy, and test a known shipment reference against the staff app. The website now displays all seven canonical lifecycle statuses, the separate hold flag and newest-first history. Missing configuration returns 503; an unknown reference returns 404; upstream errors return 502. No example status is displayed.

Read-only live check on 2026-10-15: `www.tcastcargo.com` still served the previous Tanzania phone numbers in both languages. Its tracking API returned 404 for the deliberately unknown `TCAST-CONNECTION-CHECK` reference, and the shared Supabase RPC returned HTTP 200/null for that same reference. This confirms the live lookup path responds; it does not verify a real customer shipment.

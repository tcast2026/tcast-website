# TCAST Cargo corporate website

Production-ready bilingual corporate website for **TCAST Cargo & Clearing Ltd**, built with Next.js App Router, TypeScript and Tailwind CSS.

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
- `SUPABASE_URL`, `SUPABASE_SERVICE_ROLE_KEY` — server-only credentials for the shared Supabase project. The tracking API route (`src/app/api/tracking/route.ts`) reads shipment data written by the Cargo App; the website never stores its own shipment records. See `../supabase/README.md` for schema setup.
- `ALLOWED_FORM_ORIGINS` — comma-separated trusted production origins.

No secret is exposed to browser code. When SMTP or shipment tracking is not configured, the website shows a clear contact alternative and does not claim success or display sample shipment data.

## Deployment

The project is ready for Vercel. Add the required environment variables to the Vercel project, deploy, then verify the production domain, email delivery, maps and the live Supabase tracking data.

See [IMAGE-SOURCES.md](./IMAGE-SOURCES.md) for licensed photography and brand-asset notes.

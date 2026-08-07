import { createClient } from "@supabase/supabase-js";

// Server-only Supabase client for the shared shipments database. This uses
// the service-role key, which bypasses Row Level Security, so it must never
// be imported from a "use client" component or exposed to the browser.
// It is only ever called from API routes (see src/app/api/tracking/route.ts).
//
// Note: intentionally untyped (no Database generic). This project doesn't
// run `supabase gen types`, and hand-written Database generics fight this
// supabase-js version's select-string type inference (resolves to `never`
// instead of the row shape). Row shapes are asserted explicitly at the call
// site in route.ts against supabase-types.ts, which mirrors the migration.

let client: ReturnType<typeof createClient> | null = null;

export function supabaseConfigured() {
  return Boolean(process.env.SUPABASE_URL && process.env.SUPABASE_SERVICE_ROLE_KEY);
}

export function getSupabaseServerClient() {
  if (!supabaseConfigured()) return null;
  if (!client) {
    client = createClient(process.env.SUPABASE_URL!, process.env.SUPABASE_SERVICE_ROLE_KEY!, {
      auth: { persistSession: false, autoRefreshToken: false },
    });
  }
  return client;
}

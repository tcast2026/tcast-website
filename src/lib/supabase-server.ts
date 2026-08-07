import { createClient } from "@supabase/supabase-js";

// Server-only Supabase client for the shared cargo database. Deliberately
// uses the PUBLISHABLE (anon) key, never the service_role key — this app
// only ever needs read-only, enumeration-safe access to one RPC
// (track_shipment, see supabase/migrations), and Row Level Security keeps
// every actual table closed to this key. Kept server-side (not shipped to
// the browser bundle) purely so the tracking lookup can be rate-limited
// (see src/lib/forms.ts) and so the key/URL aren't hard-coded into client
// JS — it is not a secret and holds no elevated privileges.
//
// Note: intentionally untyped (no Database generic). This project doesn't
// run `supabase gen types`, and hand-written Database generics fight this
// supabase-js version's select-string type inference (resolves to `never`
// instead of the row shape). The RPC response shape is asserted at the
// call site in route.ts against supabase-types.ts.

let client: ReturnType<typeof createClient> | null = null;

export function supabaseConfigured() {
  return Boolean(process.env.SUPABASE_URL && process.env.SUPABASE_ANON_KEY);
}

export function getSupabaseServerClient() {
  if (!supabaseConfigured()) return null;
  if (!client) {
    client = createClient(process.env.SUPABASE_URL!, process.env.SUPABASE_ANON_KEY!, {
      auth: { persistSession: false, autoRefreshToken: false },
    });
  }
  return client;
}

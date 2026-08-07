import { createClient } from "@supabase/supabase-js";

// Server-side Supabase client for API routes. Uses the same NEXT_PUBLIC_
// vars as the browser client (src/lib/supabase-browser.ts) — this is the
// publishable key, not a secret, so there is no separate server-only name
// for it. Kept as its own client instance so the tracking API route can
// still apply its own rate limiting (see src/app/api/tracking/route.ts)
// independently of any direct browser calls.
let client: ReturnType<typeof createClient> | null = null;
export function supabaseConfigured() {
  return Boolean(process.env.NEXT_PUBLIC_SUPABASE_URL && process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY);
}
export function getSupabaseServerClient() {
  if (!supabaseConfigured()) return null;
  if (!client) {
    client = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL!, process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY!, {
      auth: { persistSession: false, autoRefreshToken: false },
    });
  }
  return client;
}

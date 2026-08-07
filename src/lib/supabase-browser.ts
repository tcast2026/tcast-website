import { createClient } from "@supabase/supabase-js";

// Browser-safe Supabase client. NOT currently used — the tracking page
// calls /api/tracking (src/app/api/tracking/route.ts) instead, which
// applies IP rate limiting before calling track_shipment(). Calling
// Supabase directly from the browser, as this client would do, skips
// that rate limiting entirely; combined with the Cargo App's predictable
// tracking-number format (TCAST-YYMMDD-XXXX), that made shipment records
// enumerable, so it was reverted during the pre-deploy security audit.
// Kept here in case a future rate-limited direct-read design is wanted —
// do not wire this into the tracking form without adding equivalent
// protection first (e.g. a rate limit inside track_shipment() itself).
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabasePublishableKey = process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY;

export const supabaseBrowserConfigured = Boolean(supabaseUrl && supabasePublishableKey);

export const supabaseBrowser = createClient(
  supabaseUrl || "https://placeholder.supabase.co",
  supabasePublishableKey || "placeholder-key",
  { auth: { persistSession: false, autoRefreshToken: false } }
);

import { createClient } from "@supabase/supabase-js";

// Browser-safe Supabase client. NEXT_PUBLIC_ vars are inlined into the
// client bundle by Next.js, which is fine here — this is the publishable
// key, not a secret. It has no table access at all (Row Level Security
// restricts every table to `authenticated` staff in the Cargo App); the
// only thing it can do is call the read-only track_shipment() function,
// so the tracking page can read shipment data directly from Supabase
// without this app ever holding write access or a way to enumerate
// shipments.
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabasePublishableKey = process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY;

export const supabaseBrowserConfigured = Boolean(supabaseUrl && supabasePublishableKey);

export const supabaseBrowser = createClient(
  supabaseUrl || "https://placeholder.supabase.co",
  supabasePublishableKey || "placeholder-key",
  { auth: { persistSession: false, autoRefreshToken: false } }
);

import { createClient } from "@supabase/supabase-js";

/**
 * Server-only Supabase client using the service role key, for the leads
 * route handler. Requires SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY env
 * vars (see supabase/migrations/0001_leads.sql and README). TODO-verify:
 * project not yet provisioned, see content/TODO-verify.md.
 */
export function getSupabaseServerClient() {
  const url = process.env.SUPABASE_URL;
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!url || !key) {
    throw new Error("Supabase env vars are not configured. See README for setup.");
  }
  return createClient(url, key, { auth: { persistSession: false } });
}

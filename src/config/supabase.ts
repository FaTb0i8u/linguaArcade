/**
 * Supabase client configuration.
 *
 * Replace the placeholder values below with your real Supabase
 * project URL and anon key.  You can find them in your Supabase
 * dashboard → Settings → API.
 *
 * For local-only development (no backend), the app falls back to
 * AsyncStorage — see src/services/storage.ts.
 */

import 'react-native-url-polyfill/auto';
import { createClient } from '@supabase/supabase-js';
import AsyncStorage from '@react-native-async-storage/async-storage';

// ⚠️  TODO: replace with your real values
const SUPABASE_URL = 'https://your-project.supabase.co';
const SUPABASE_ANON_KEY = 'your-anon-key';

/**
 * Whether Supabase is actually configured.
 * When false the app runs in offline / local-only mode.
 */
export const isSupabaseConfigured =
  !SUPABASE_URL.includes('your-project') &&
  !SUPABASE_ANON_KEY.includes('your-anon-key');

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY, {
  auth: {
    storage: AsyncStorage,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false, // important for RN
  },
});

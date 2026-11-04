import { createClient } from '@supabase/supabase-js';
import type { Database } from '../types';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || '';
const supabaseAnonKey =
  import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY ||
  import.meta.env.VITE_SUPABASE_ANON_KEY ||
  '';

/**
 * Checks whether valid Supabase environment variables have been provided.
 * Supports both VITE_SUPABASE_PUBLISHABLE_KEY and VITE_SUPABASE_ANON_KEY.
 * Does not fall back to fake mocks or fake credentials.
 */
export const isSupabaseConfigured = Boolean(
  supabaseUrl &&
  supabaseAnonKey &&
  supabaseUrl !== 'https://your-project-id.supabase.co' &&
  supabaseAnonKey !== 'your-anon-key-here' &&
  supabaseAnonKey !== 'YOUR_COMPLETE_PUBLISHABLE_KEY' &&
  supabaseAnonKey.trim().length > 20
);

if (!isSupabaseConfigured) {
  console.info(
    '[Supabase] Real credentials not yet configured in .env.local. Integration structure is prepared; live database calls and real authentication will activate once real credentials are provided.'
  );
}

// Create and export the strongly-typed Supabase client
export const supabase = createClient<Database>(
  supabaseUrl || 'https://placeholder.supabase.co',
  supabaseAnonKey || 'placeholder-key',
  {
    auth: {
      persistSession: true,
      autoRefreshToken: true,
      detectSessionInUrl: true,
    },
  }
);

import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

let supabase;

if (!supabase) {
  supabase = createClient(supabaseUrl, supabaseAnonKey);
}

// supabase = createClient(supabaseUrl, supabaseAnonKey);

export default supabase;

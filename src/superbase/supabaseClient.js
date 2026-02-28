import { createClient } from "@supabase/supabase-js";

// const supabaseUrl = "https://YOUR_PROJECT_ID.supabase.co";
// const supabaseAnonKey = "YOUR_ANON_PUBLIC_KEY";

const supabaseUrl = process.env.REACT_APP_SUPABASE_URL;
const supabaseAnonKey = process.env.REACT_APP_SUPABASE_ANON_KEY;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

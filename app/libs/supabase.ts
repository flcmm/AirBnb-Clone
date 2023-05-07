import { createClient } from '@supabase/supabase-js'
import { Database } from './database.type'

// Create a single supabase client for interacting with your database
const anonKey = typeof process.env.NEXT_PUBLIC_ANON_KEY
const supabaseKey = typeof process.env.NEXT_PUBLIC_SUPABASE_KEY
export const supabase = createClient<Database>(supabaseKey, anonKey)
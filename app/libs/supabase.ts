import { createClient } from '@supabase/supabase-js'
import { Database } from './database.type'

// Create a single supabase client for interacting with your database
  const anonKey = process.env.NEXT_PUBLIC_ANON_KEY as string
  const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_URL as string
  console.log(supabaseKey, anonKey)
  export const supabase = createClient<Database>(supabaseKey, anonKey)
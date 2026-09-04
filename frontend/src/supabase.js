import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://ebbzljihnftxruaxltud.supabase.co'
const supabaseKey = 'sb_publishable_FqTtr9_5ojpIp2Sjq4_iUw_otMsKxj3'

export const supabase = createClient(supabaseUrl, supabaseKey)

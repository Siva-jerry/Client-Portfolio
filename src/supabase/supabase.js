import { createClient } from "@supabase/supabase-js";

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;

const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

export const supabase = createClient(
    supabaseUrl,
    supabaseAnonKey
);

/*
--------------------------------------------------------
Return Public Image URL
--------------------------------------------------------
*/

export function getSupabaseImageUrl(path) {

    if (!path) return "";

    // Already a full URL? Return it directly.
    if (
        path.startsWith("http://") ||
        path.startsWith("https://")
    ) {

        return path;

    }

    // Otherwise treat it as a storage path.
    const { data } = supabase.storage
        .from("portfolio-cms")
        .getPublicUrl(path);

    return data.publicUrl;

}
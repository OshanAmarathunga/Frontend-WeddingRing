import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL,
  import.meta.env.VITE_ANON_KEY
);

export async function uploadFile(file) {
  try {
        const { data, error } = await supabase.storage
      .from(import.meta.env.VITE_BUCKET_NAME)
      .upload(file.name, file);
    

    if (error) {
      if (error.statusCode == 409) {
        console.warn("File already exists, generating public URL.");
        const { data: publicUrlData, error: urlError } = supabase.storage
          .from(import.meta.env.VITE_BUCKET_NAME)
          .getPublicUrl(file.name);

        if (urlError) {
          console.error(
            "Failed to get public URL for existing file:",
            urlError
          );
          return { status: "error", error: urlError };
        }

        return {
          status: "success",
          data: publicUrlData.publicUrl,
          existing: true,
        };
      }
    }

    const { data: publicUrlData, error: urlError } = supabase.storage
      .from(import.meta.env.VITE_BUCKET_NAME)
      .getPublicUrl(file.name);

    if (urlError) {
      console.error("Failed to get public URL after upload:", urlError);
      return { status: "error", error: urlError };
    }

    return {
      status: "success",
      data: publicUrlData.publicUrl,
      existing: false,
    };
  } catch (err) {
    console.error("Unexpected error:", err);
    return { status: "error", error: err };
  }
}

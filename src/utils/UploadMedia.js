import { createClient } from '@supabase/supabase-js'

const supabase = createClient(import.meta.env.VITE_SUPABASE_URL, import.meta.env.VITE_ANON_KEY);



export function uploadFile(file) {
    supabase.storage.from(import.meta.env.VITE_BUCKET_NAME).upload(file.name, file)
    .then((res)=>{
        console.log("upload Success",res);
    }).catch((error)=>{
        console.log(error);
    })
    
  }
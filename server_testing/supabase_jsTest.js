const supabase = require("@supabase/supabase-js")
const url = "https://phaudluctvcgkxzywudy.supabase.co"
const key = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBoYXVkbHVjdHZjZ2t4enl3dWR5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjAxMDIzNTAsImV4cCI6MjA3NTY3ODM1MH0.ISvHMBgOp-13wahELPtwXhInGGdmRKUKwlWDCU9UqeM"

const client = supabase.createClient(url, key)

async function read(tableName){
    try{
        res = await client.from(tableName).select("*"); 
        data = res.data; 

        for(let brother of data){
            console.log(brother)
        }
        console.log('success')
    }catch(e){
        console.log(e); 
    }
}

//read("Members")
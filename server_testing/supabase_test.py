import supabase as spb 
import json
url = "https://phaudluctvcgkxzywudy.supabase.co"
key = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBoYXVkbHVjdHZjZ2t4enl3dWR5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjAxMDIzNTAsImV4cCI6MjA3NTY3ODM1MH0.ISvHMBgOp-13wahELPtwXhInGGdmRKUKwlWDCU9UqeM"


def read(tableName):
    try:
        client = spb.create_client(url, key)
        resp = client.table(tableName).select("*").execute()
        data = resp.data
        print("success")
        print(data)

        #iterate through data 
        for itm in data:
            print(itm)
    except Exception as e: 
        print(e)


#read("Members")


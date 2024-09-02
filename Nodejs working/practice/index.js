const express = require ("express")
const app = express()

let users = [
    {
        name:"user 1",
        age:20
    },
    {
        name:"user 2",
        age:21
    },

]

app.get("/users",(req,res)=>{
    res.json(users)
})

app.listen(3000,()=>{
    console.log("web server is running on port 3000");
    
})
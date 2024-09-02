const express = require ("express")
const cors = require("cors")
const app = express()
//middleware (gate keeper. whenever something come to this server must cross this one first)
app.use(cors({
    origin:"http://localhost:5173"
}))
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
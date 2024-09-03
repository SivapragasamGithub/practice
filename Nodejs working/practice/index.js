const express = require ("express")
const cors = require("cors")
const app = express()
//middleware (gate keeper. whenever something come to this server must cross this one first)
app.use(cors({
    origin:"http://localhost:5173"
}))
app.use(express.json()) //(it will ftech the data which we send from frontend and pass to to the req object (post method).so we just type req.body and we can get the data from server)
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
app.post("/user",(req,res)=>{
// res.json({message:"post method called"})
// console.log(req.body);
users.push(req.body)
res.json({message:"user created successfully"})

})

app.listen(3000,()=>{
    console.log("web server is running on port 3000");
    
})
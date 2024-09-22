const express = require("express");
const cors = require("cors");
// const mongodb = require("mongodb")
// const mongodbClient = mongodb.MongoClient
const { MongoClient } = require("mongodb");
const app = express();

const URL =
  "mongodb+srv://siva15:Mailsiva#15@cluster0.ijw9d.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
//middleware
app.use(
  cors({
    origin: "http://localhost:5173",
  })
);
app.use(express.json());

let users = [];

app.get("/users", (req, res) => {
  res.json(users);
});

app.post("/user", async (req, res) => {
  //connect the data base server
  //select the databse
  //select the collection
  //do the operation
  //close the connection

  try {
    //connect the data base server
    const connection = await MongoClient.connect(URL);

    //select the databse
    const db = connection.db("BEtest");
    //select the collection
    const collection = db.collection("test");
    //do the operation
    await collection.insertOne(req.body);

    //close the connection
    await connection.close();
    res.json({
      message: "created successfully",
    });
  } catch (error) {
    res.status(500).json({
      message: "something went wrong",
    });
  }
  // id = users.length + 1;
  // users.push({ ...req.body, id });
  // res.json({ message: "user created successfully" });
});

app.get("/user/:id", (req, res) => {
  let user = users.find((obj) => obj.id == req.params.id);
  if (user) {
    res.json(user);
  } else {
    res.json({ message: "User Not found" });
  }
});

//ID, Data for Edit
app.put("/user/:id", (req, res) => {
  //find the user by id

  let index = users.findIndex((obj) => obj.id == req.params.id);
  if (!users[index]) {
    res.json({ message: "User not found" });
  }

  //change the data
  users[index] = { ...req.body, id: parseInt(req.params.id) };
  //return
  res.json({ message: "user updated success" });
});

app.delete("/user/:id", (req, res) => {
  //fnd index
  let index = users.findIndex((obj) => obj.id == req.params.id);
  //delete index
  users.splice(index, 1);

  res.json({ message: "User deleted" });
});

app.listen(3000, () => {
  console.log("webserver is start running on port 3000");
});

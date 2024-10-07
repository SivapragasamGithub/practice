const express = require("express");
const app = express();
const { MongoClient } = require("mongodb");
// const mongodbClient = mongodb.MongoClient;
const cors = require("cors");

const URL =
  "mongodb+srv://siva15:admin123@cluster1.f0cox.mongodb.net/?retryWrites=true&w=majority&appName=Cluster1";

//Middleware
app.use(
  cors({
    origin: "http://localhost:5173",
  })
);
app.use(express.json());

app.post("/user", async (req, res) => {
  /**
   * 1.connect the DB server
   * 2.select the DB
   * 3.select the collection
   * 4.do the operation
   * 5.close the collection
   */

  try {
    //1.connect the DB server
    const connection = new MongoClient(URL);
    await connection.connect();
    //2.select the DB

    const db = connection.db("marketplace");

    //3.select the collection

    const collection = db.collection("candidates");

    //do the operation
    await collection.insertOne(req.body);

    //close the collection
    connection.close();

    res.json({
      message: "Profile created succesfully",
    });
  } catch (error) {
    console.log(error);

    res.status(500).json({
      message: "Something went wrong on while post",
    });
  }
  // res.json(req.body);
  // console.log(req.body);
});
app.get("/users", async (req, res) => {
  try {
    //1.connect the DB server
    const connection = new MongoClient(URL);
    await connection.connect();
    //2.select the DB

    const db = connection.db("marketplace");

    //3.select the collection

    const collection = db.collection("candidates");

    //do the operation
    const users = await collection.find({}).toArray();
    // console.log(users);

    //close the collection
    connection.close();

    res.json(users);
  } catch (error) {
    res.status(500).json({
      message: "Something went wrong on while get users",
    });
  }
});
app.listen(3000, () => {
  console.log("web server is running on port 3000");
});

const express = require("express");
const app = express();
const { MongoClient, ObjectId } = require("mongodb");
// const mongodbClient = mongodb.MongoClient;
const cors = require("cors");
const dotenv = require("dotenv");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
dotenv.config();

const URL = process.env.DB;
const SECRET_KEY =
  "JSON123WEBTOKEN456SECREET789KEYjson123webtoken456secret789key";

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
    console.log("the requ.body while receiving for model saving:", req.body);

    //do the operation
    const result = await collection.insertOne(req.body);
    const createdUser = await collection.findOne({ _id: result.insertedId }); // Fetch the created user
    console.log("the created user while model saving:", createdUser);
    console.log("the result while model saving:", result);
    console.log("the result ID is while model saving:", result.insertedId);

    //close the collection
    connection.close();
    res.json(createdUser); // Return the created user details, including the ID
    // res.json({
    //   message: "Profile created succesfully",
    //   id: result.insertedId,
    // });
  } catch (error) {
    console.log(error);

    res.status(500).json({
      message: "Something went wrong on while post",
    });
  }
  // res.json(req.body);
  // console.log(req.body);
});

// //put option

app.put("/user/:id", async (req, res) => {
  let connection;
  try {
    // Connect to the database
    connection = new MongoClient(URL);
    await connection.connect();

    // Select the database and collection
    const db = connection.db("marketplace");
    const collection = db.collection("candidates");
    console.log("the req.params.id is:", req.params.id);

    // Validate ObjectId
    if (!ObjectId.isValid(req.params.id)) {
      return res.status(400).json({ message: "Invalid User ID format on put" });
    }

    // Update the user profile
    const userId = new ObjectId(req.params.id);
    const updateData = req.body; // Data from the request body

    // Remove any properties that shouldn't be updated (e.g., _id)
    delete updateData._id;
    console.log("the update data is:", updateData);
    console.log("the update id is:", userId);

    const result = await collection.findOneAndUpdate(
      { _id: userId },
      { $set: updateData }
    );
    console.log("the result is:", result);

    // Check if a document was modified
    if (result.modifiedCount === 0) {
      return res
        .status(404)
        .json({ message: "User not found or no changes made" });
    }

    // Fetch the updated user to return
    const updatedUser = await collection.findOne({ _id: userId });
    console.log("the updateddddd data is:", updatedUser);

    res.json({
      message: "User profile updated successfully",
      user: updatedUser,
    });
  } catch (error) {
    console.error("Error updating user profile:", error);
    res
      .status(500)
      .json({ message: "An error occurred while updating user profile" });
  } finally {
    if (connection) {
      await connection.close();
    }
  }
});

app.get("/user/:id", async (req, res) => {
  let connection;
  try {
    // Connect to MongoDB
    connection = new MongoClient(URL);
    await connection.connect();
    const db = connection.db("marketplace");
    const collection = db.collection("candidates");
    // Check if the ID is a valid ObjectId
    if (!ObjectId.isValid(req.params.id)) {
      console.log(
        "Invalid ObjectId format while get in user:id:",
        req.params.id
      );
      return res.status(400).json({ message: "Invalid User ID format on get" });
    }

    console.log("Fetching user with ID:", req.params.id);

    const userId = new ObjectId(req.params.id);
    const updateData = req.body;

    // Convert the string ID to ObjectId for querying
    const user = await collection.findOne({ _id: userId });

    console.log("Fetched User:", user);

    // Check if user was found
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Return the found user
    res.json(user);
  } catch (error) {
    console.error("Error fetching user:", error);
    res
      .status(500)
      .json({ message: "Something went wrong while fetching user" });
  } finally {
    if (connection) {
      connection.close();
    }
  }
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

app.post("/userregister", async (req, res) => {
  try {
    //1.connect the DB server
    const connection = new MongoClient(URL);
    await connection.connect();
    //2.select the DB

    const db = connection.db("marketplace");

    //3.select the collection

    const collection = db.collection("Userlist");

    //hashing
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(req.body.password, salt);
    // const hashemail = await bcrypt.hash(req.body.email, salt);
    // console.log(hash);
    // req.body.email = hashemail;
    req.body.password = hash;

    //do the operation
    const registeredUser = await collection.insertOne(req.body);
    console.log("the registeredUser is:", registeredUser);

    //close the collection
    await connection.close();
    // console.log(req.body);

    res.json({
      message: "User created successfully",
      user: registeredUser,
    });
  } catch (error) {
    res.status(500).json({
      message: "user create error",
    });
  }
});

//Login

app.post("/login", async (req, res) => {
  let connection;
  try {
    // 1. Connect to the database server
    connection = new MongoClient(URL);
    await connection.connect();

    // 2. Select the database and the relevant collections
    const db = connection.db("marketplace");
    const userListCollection = db.collection("Userlist");
    const candidatesCollection = db.collection("candidates");

    /**
//      * find the user by emailid
//      * If user Not found throw err
//      *
//      * If user found?
//      * check the attempt.If the attempt is less tha 3 then proceed
//      * hash the given password
//      * compare the given hash with DB hash
//      * if hash not same
//      * increment the attempt
//      * and throw err
//      *
//      * if hash is same
//      * genrate token
//      */

    // 3. Find the user by email in the Userlist collection
    const user = await userListCollection.findOne({ email: req.body.email });
    console.log("User found in Userlist:", user);

    // Check if user exists
    if (!user) {
      return res
        .status(404)
        .json({ message: "Incorrect username or password" });
    }

    // 4. Check if the entered password matches the hashed password
    const passwordCorrect = await bcrypt.compare(
      req.body.password,
      user.password
    );
    console.log("Entered password:", req.body.password);
    console.log("Stored password hash:", user.password);

    if (!passwordCorrect) {
      // Increment the attempt count if the password is incorrect
      if (user.attempt >= 3) {
        return res.status(403).json({ message: "Attempt exceeded" });
      }

      await userListCollection.updateOne(
        { email: req.body.email },
        { $inc: { attempt: 1 } }
      );

      return res
        .status(401)
        .json({ message: "Incorrect username or password" });
    }

    // 5. Reset attempts on successful login
    await userListCollection.updateOne(
      { email: req.body.email },
      { $set: { attempt: 0 } }
    );

    // 6. Fetch the candidate profile using the email
    const candidate = await candidatesCollection.findOne({ email: user.email });
    console.log("Candidate found in candidates collection:", candidate);

    if (!candidate) {
      return res.status(404).json({ message: "Candidate not found" });
    }

    // 7. Generate a JWT token with the candidate's ID
    const token = jwt.sign({ id: candidate._id.toString() }, SECRET_KEY);
    console.log("Generated token:", token);

    // 8. Close the database connection
    await connection.close();

    // 9. Return the response with the candidate's details
    return res.json({
      message: "Login successful",
      token: token,
      email: candidate.email,
      _id: candidate._id,
      profile: candidate, // Optional: Send entire candidate profile if needed
    });
  } catch (error) {
    console.error("Error during login:", error);
    res.status(500).json({ message: "An error occurred during login" });
  } finally {
    if (connection) {
      await connection.close();
    }
  }
});

app.listen(3000, () => {
  console.log("web server is running on port 3000");
});

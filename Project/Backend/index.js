const express = require("express");
const app = express();
const mongodb = require("mongodb");
const { MongoClient, ObjectId } = require("mongodb");
const cors = require("cors");
const dotenv = require("dotenv");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const crypto = require("crypto");
const nodemailer = require("nodemailer");

dotenv.config();

const URL = process.env.DB;
const EMAIL_USER = process.env.EMAIL_USER;
const EMAIL_PASS = process.env.EMAIL_PASS;

// Nodemailer transporter
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: EMAIL_USER,
    pass: EMAIL_PASS,
  },
});

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
    const createdUser = await collection.findOne({ _id: result.insertedId });
    console.log("the created user while model saving:", createdUser);
    console.log("the result while model saving:", result);
    console.log("the result ID is while model saving:", result.insertedId);

    //close the collection
    connection.close();
    res.json({ createdUser, _id: result.insertedId });
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
});

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
    const updateData = req.body;
    // Remove any properties that not be updated
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
    const Reviewcollection = db.collection("reviews");
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
    const reviews = await Reviewcollection.find({
      freelancerId: userId,
    }).toArray();

    res.json({ user, reviews });
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
    const connection = new MongoClient(URL);
    await connection.connect();
    const db = connection.db("marketplace");
    const collection = db.collection("candidates");
    const users = await collection.find({}).toArray();
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

app.post("/login", async (req, res) => {
  let connection;
  try {
    connection = new MongoClient(URL);
    await connection.connect();

    const db = connection.db("marketplace");
    const userListCollection = db.collection("Userlist");
    const candidatesCollection = db.collection("candidates");
    const employerListCollection = db.collection("Employerlist");
    const employersCollection = db.collection("employer");

    // Check if the user is in the Employerlist
    const employer = await employerListCollection.findOne({
      email: req.body.email,
    });
    if (employer) {
      const passwordCorrect = await bcrypt.compare(
        req.body.password,
        employer.password
      );
      if (!passwordCorrect) {
        return res
          .status(401)
          .json({ message: "Incorrect username or password" });
      }

      // Fetch employer details
      const employerDetails = await employersCollection.findOne({
        email: employer.email,
      });
      if (!employerDetails) {
        return res.status(404).json({ message: "Employer not found" });
      }

      const token = jwt.sign(
        { id: employerDetails._id.toString() },
        SECRET_KEY
      );
      return res.json({
        message: "Employer login successful",
        userType: "employer",
        token,
        email: employerDetails.email,
        _id: employerDetails._id,
        profile: employerDetails,
      });
    }

    // If not found in Employerlist, check the Userlist
    const user = await userListCollection.findOne({ email: req.body.email });
    if (!user) {
      return res
        .status(404)
        .json({ message: "Incorrect username or password" });
    }

    const passwordCorrect = await bcrypt.compare(
      req.body.password,
      user.password
    );
    if (!passwordCorrect) {
      return res
        .status(401)
        .json({ message: "Incorrect username or password" });
    }

    const candidate = await candidatesCollection.findOne({ email: user.email });
    if (!candidate) {
      return res.status(404).json({ message: "Candidate not found" });
    }

    const token = jwt.sign({ id: candidate._id.toString() }, SECRET_KEY);
    return res.json({
      message: "Candidate login successful",
      userType: "candidate",
      token,
      email: candidate.email,
      _id: candidate._id,
      profile: candidate,
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

// Password reset route
app.post("/reset-password", async (req, res) => {
  const { email } = req.body;
  console.log(req.body);

  // 1. Connect to the DB server
  const client = new MongoClient(URL);
  try {
    await client.connect();

    // 2. Select the DB
    const db = client.db("marketplace");

    // 3. Check the `userlist` collection first
    let account = db.collection("userlist").find({ email });
    let accountType = "user";

    // 4. If not found in `userlist`, check the `Employerlist` collection
    if (!account) {
      account = db.collection("Employerlist").find({ email });
      accountType = account ? "employer" : null;
    }

    if (!account) {
      return res
        .status(404)
        .json({ message: "Email not found in our records." });
    }

    // Generate a password reset token
    const resetToken = crypto.randomBytes(32).toString("hex");
    const hashedToken = await bcrypt.hash(resetToken, 10);

    // Update the reset token in the corresponding collection
    const updateQuery = { email };
    const updateData = {
      $set: { resetToken: hashedToken, tokenExpiry: Date.now() + 3600000 },
    }; // Token expires in 1 hour

    if (accountType === "user") {
      await db.collection("userlist").updateOne(updateQuery, updateData);
    } else if (accountType === "employer") {
      await db.collection("Employerlist").updateOne(updateQuery, updateData);
    }

    // Send password reset email
    const resetLink = `http://your-frontend-url/reset-password?token=${resetToken}`;
    await transporter.sendMail({
      from: "your-email@gmail.com",
      to: email,
      subject: "Password Reset",
      text: `Click the link to reset your password: ${resetLink}`,
      html: `<p>Click the link to reset your password: <a href="${resetLink}">Reset Password</a></p>`,
    });

    res.json({ message: "Password reset email sent successfully." });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error." });
  } finally {
    // 5. Close the connection
    await client.close();
  }
});

//EMployers
app.post("/employer", async (req, res) => {
  try {
    //1.connect the DB server
    const connection = new MongoClient(URL);
    await connection.connect();
    //2.select the DB

    const db = connection.db("marketplace");

    //3.select the collection

    const collection = db.collection("employer");
    console.log("the requ.body while receiving for model saving:", req.body);

    //do the operation
    const result = await collection.insertOne(req.body);
    const createdemployer = await collection.findOne({
      _id: result.insertedId,
    });
    console.log("the createdemployer while model saving:", createdemployer);
    console.log("the result while model saving:", result);
    console.log("the result ID is while model saving:", result.insertedId);

    //close the collection
    connection.close();
    res.json({ createdemployer, _id: result.insertedId });
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

app.get("/employers", async (req, res) => {
  try {
    //1.connect the DB server
    const connection = new MongoClient(URL);
    await connection.connect();
    //2.select the DB

    const db = connection.db("marketplace");

    //3.select the collection

    const collection = db.collection("employer");
    //do the operation
    const employers = await collection.find({}).toArray();
    // console.log(users);

    //close the collection
    connection.close();

    res.json(employers);
  } catch (error) {
    res.status(500).json({
      message: "Something went wrong on while get employers",
    });
  }
});

app.get("/employer/:id", async (req, res) => {
  let connection;
  try {
    // Connect to MongoDB
    connection = new MongoClient(URL);
    await connection.connect();
    const db = connection.db("marketplace");
    const collection = db.collection("employer");
    // Check if the ID is a valid ObjectId
    if (!ObjectId.isValid(req.params.id)) {
      console.log(
        "Invalid ObjectId format while get in employer:id:",
        req.params.id
      );
      return res
        .status(400)
        .json({ message: "Invalid employer ID format on get" });
    }

    console.log("Fetching employer with ID:", req.params.id);

    const employerId = new ObjectId(req.params.id);
    const updateData = req.body;

    // Convert the string ID to ObjectId for querying
    const employer = await collection.findOne({ _id: employerId });

    console.log("Fetched employer:", employer);

    // Check if user was found
    if (!employer) {
      return res.status(404).json({ message: "employer not found" });
    }

    // Return the found user
    res.json(employer);
  } catch (error) {
    console.error("Error fetching employer:", error);
    res
      .status(500)
      .json({ message: "Something went wrong while fetching employer" });
  } finally {
    if (connection) {
      connection.close();
    }
  }
});

app.put("/employer/:id", async (req, res) => {
  let connection;
  try {
    // Connect to the database
    connection = new MongoClient(URL);
    await connection.connect();

    // Select the database and collection
    const db = connection.db("marketplace");
    const collection = db.collection("employer");
    console.log("the req.params.id is:", req.params.id);

    if (!ObjectId.isValid(req.params.id)) {
      return res
        .status(400)
        .json({ message: "Invalid employer ID format on put" });
    }

    const employerId = new ObjectId(req.params.id);
    const updateData = req.body;

    delete updateData._id;
    console.log("the update data is:", updateData);
    console.log("the update id is:", employerId);

    const result = await collection.findOneAndUpdate(
      { _id: employerId },
      { $set: updateData }
    );
    console.log("the result is:", result);

    // Check if a document was modified
    if (result.modifiedCount === 0) {
      return res
        .status(404)
        .json({ message: "employer not found or no changes made" });
    }

    // Fetch the updated user to return
    const updatedemployer = await collection.findOne({ _id: employerId });
    console.log("the updateddddd data is:", updatedemployer);

    res.json({
      message: "User profile updated successfully",
      user: updatedemployer,
    });
  } catch (error) {
    console.error("Error updating user profile:", error);
    res
      .status(500)
      .json({ message: "An error occurred while updating employer profile" });
  } finally {
    if (connection) {
      await connection.close();
    }
  }
});

app.post("/employerregister", async (req, res) => {
  try {
    //1.connect the DB server
    const connection = new MongoClient(URL);
    await connection.connect();
    //2.select the DB

    const db = connection.db("marketplace");

    //3.select the collection

    const collection = db.collection("Employerlist");

    //hashing
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(req.body.password, salt);
    // const hashemail = await bcrypt.hash(req.body.email, salt);
    // console.log(hash);
    // req.body.email = hashemail;
    req.body.password = hash;

    //do the operation
    const registeredemployer = await collection.insertOne(req.body);
    console.log("the registeredemployer is:", registeredemployer);

    //close the collection
    await connection.close();
    // console.log(req.body);

    res.json({
      message: "employer created successfully",
      employer: registeredemployer,
    });
  } catch (error) {
    res.status(500).json({
      message: "employer create error",
    });
  }
});

//Reviews
app.post("/reviews", async (req, res) => {
  try {
    const connection = new MongoClient(URL);
    await connection.connect();

    const db = connection.db("marketplace");
    const collection = db.collection("reviews");

    const { freelancerId, clientId, rating, comment } = req.body;

    const review = {
      freelancerId: new ObjectId(freelancerId),
      clientId: new ObjectId(clientId),
      rating,
      comment,
      response: null, // No response yet
      createdAt: new Date(),
    };

    const result = await collection.insertOne(review);
    const createdReview = await collection.findOne({ _id: result.insertedId });

    connection.close();

    res
      .status(201)
      .json({ message: "Review added successfully", review: createdReview });
  } catch (error) {
    console.error("Error adding review:", error);
    res.status(500).json({ message: "Failed to add review" });
  }
});

app.put("/reviews/:reviewId", async (req, res) => {
  try {
    const connection = new MongoClient(URL);
    await connection.connect();

    const db = connection.db("marketplace");
    const collection = db.collection("reviews");

    const { reviewId } = req.params;
    const { response } = req.body;

    const updatedReview = await collection.findOneAndUpdate(
      { _id: new ObjectId(reviewId) },
      { $set: { response } },
      { returnDocument: "after" }
    );

    connection.close();

    res.json({
      message: "Response added successfully",
      review: updatedReview.value,
    });
  } catch (error) {
    console.error("Error adding response:", error);
    res.status(500).json({ message: "Failed to add response" });
  }
});

app.get("/freelancers/:freelancerId/reviews", async (req, res) => {
  try {
    const connection = new MongoClient(URL);
    await connection.connect();

    const db = connection.db("marketplace");
    const collection = db.collection("reviews");

    const { freelancerId } = req.params;

    const reviews = await collection
      .find({ freelancerId: new ObjectId(freelancerId) })
      .toArray();

    connection.close();

    res.json({ reviews });
  } catch (error) {
    console.error("Error fetching reviews:", error);
    res.status(500).json({ message: "Failed to fetch reviews" });
  }
});

app.listen(3000, () => {
  console.log("web server is running on port 3000");
});

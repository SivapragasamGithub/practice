const express = require("express");
const app = express();

app.get("/user", (req, res) => {
  res.json({ message: "Hello world" });
});

app.listen(3000, () => {
  console.log("web server running");
});

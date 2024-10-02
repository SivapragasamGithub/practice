const express = require("express");
const app = express();

app.get("/user", (req, res) => {
  res.json({ message: "hello world" });
});
app.listen(3000, () => {
  console.log("web server is running on port 3000");
});



const express = require("express");
const app = express();

app.get("/", (req, res) => {
  // console.log(req);
  res.send("<h1>Goodbye!</h1>");
  console.log(res);
})

app.get("/about", (req, res) => {
  res.send("I'm Felipe!");
})

app.listen(3000, () => {
  console.log("Server running on port 3000...");
});
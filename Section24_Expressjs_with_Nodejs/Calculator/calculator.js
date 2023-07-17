const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
})

app.get("/bmiCalculator", (req, res) => {
  res.sendFile(__dirname + "/bmiCalculator.html");
})

app.post("/", (req, res) => {
  res.send(`The sum of ${req.body.num1} and ${req.body.num2} is: ${Number(req.body.num1) + Number(req.body.num2)}`);
  console.log(req.body);
})

app.post("/bmiCalculator", (req, res) => {
  let height = Number(req.body.height);
  let weight = Number(req.body.weight);
  let bmi = weight / (height ** 2);
  res.send(`Your BMI is <b>${bmi.toFixed(2)}</b>.`);
})

app.listen(8080, () => {
  console.log("Server running on port 8080...");
})
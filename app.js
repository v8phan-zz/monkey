const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const app = express();
const port = process.env.PORT || 3000;

const db = require("./config/database");
const { nextTick } = require("process");
const User = require("./models/User")

//test database
db.authenticate()
  .then(() => console.log("Database connected..."))
  .catch((err) => console.log("Error: " + err));

console.log(db);

User.sync({ force: true });
  console.log("The table for the model was just (re)created!");


app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

app.post("/", function () {
  console.log("this is a POST");
});
app.get("/", function () {
  console.log("this is a GET");
  res.writeHead(200);
  res.end();
});

app.use('/login', require('./routes/login'));

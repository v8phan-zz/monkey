const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

const db = require("./config/database");
const { nextTick } = require("process");
console.log(db);

//test database
db.authenticate()
  .then(() => console.log("Database connected..."))
  .catch((err) => console.log("Error: " + err));

// async function createDatabase() {
//   try {
//     const test = await db.query(
//       "CREATE TABLE users (id MEDIUMINT NOT NULL AUTO_INCREMENT, name CHAR(30) NOT NULL, PRIMARY KEY (id))"
//     );
//     console.log(test);
//   } catch (err) {
//     console.log(err);
//   }
// }

//createDatabase();

// try {
//   const test = db.query(
//     "CREATE TABLE users (id MEDIUMINT NOT NULL AUTO_INCREMENT, name CHAR(30) NOT NULL, PRIMARY KEY (id))"
//   );
//   console.log(test);
// } catch (err) {
//   console.log(err);
// }

// db.query(
//   "CREATE TABLE users (name VARCHAR(255), address VARCHAR(255))",
//   function (err, result) {
//     try {
//       console.log("Result: " + result)
//     } catch (err) {
//       console.err(err)
//     }
//   }

// function (err, result) {
//   if (err) {
//     console.log(err.message);
//   }
//   console.log("Result: " + result);
// }
// );

const app = express();
const port = process.env.PORT || 3000;

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

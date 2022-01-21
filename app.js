const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const port = process.env.PORT || 3001;
const { nextTick } = require('process');
const pino = require('express-pino-logger')();

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(pino);

const db = require('./config/database');
// const User = require("./models/User")

// test database
db.authenticate()
  .then(() => console.log('Database connected...'))
  .catch((err) => console.log('Error: ', err));

console.log(db);

db.sync();
console.log('The table for the model was just (re)created!');

app.use(express.json());

// app.post('/api/login', (req, res) => {
//   console.log(req.body);
//   res.send({ greeting: `EMAIL = ${req.body.email}, PASS = ${req.body.password}` });
// });

// app.get('/', (req, res) => {
//   res.send(JSON.stringify({ greeting: `Hello ${req.body.email}!` }));

//   res.send('Hello Wdfsdforld!');
// });

// app.get('/login', (req, res) => {
//   const email = req.query.email || 'Wofdfdfrld';
//   res.setHeader('Content-Type', 'application/json');
//   res.send(JSON.stringify({ greeting: `Hello ${email}!` }));
// });

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

// app.post('/', function () {
//   console.log('this is a POST');
// });
// app.get('/', function () {
//   console.log('this is a GET');
//   res.writeHead(200);
//   res.end();
// });

app.use('/api', require('./routes/login'));
app.use('/api', require('./routes/signup'));

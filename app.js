const express = require('express')
const app = express()
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

app.post('/', function() {console.log('this is a POST');});
app.get('/', function() {
    console.log('this is a GET');
    res.writeHead(200);res.end();
});
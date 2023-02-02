const express = require('express');
const path = require('path');

const app = express();

app.use(express.urlencoded());

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, "/index.html"));
});

app.post("/result", (req, res) => {
  // console.log(req.body);
  res.redirect(`/output?name=${req.body.name}&age=${req.body.age}`);
});

app.get('/output', (req, res) => {
  let name = req.query.name;
  if (!name) {
    name = "person";
  }
  let age = req.query.age;
  if (!age) {
    age = 0;
  }
  res.send(`Welcome ${name}, ${age} years old.`);
});

app.listen(3000);
const express = require('express');
const path = require('path');

const app = express();

app.use(express.urlencoded());

app.use('/css', express.static(path.join(__dirname, 'css')));

app.get('/', (req, res) => {
  const date = new Date();
  const hour = date.getHours();
  // console.log(hour);
  if (hour >= 6 && hour < 18) { //day
    res.sendFile(path.join(__dirname, "/index.html"));
  } else {
    res.sendFile(path.join(__dirname, "/nightindex.html"));
  }
});

app.post("/result", (req, res) => {
  // console.log(req.body);
  let name = req.body.name;
  if (!name) {
    name = "person";
  }
  let age = req.body.age;
  if (!age) {
    age = 0;
  }
  res.send(`Welcome ${name}, ${age} years old.`);
});

app.listen(3000);
const express = require('express');
const path = require('path');

const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, "views"));

app.use(express.urlencoded({extended: false}));

app.get('/', (req, res) => {
  res.render('index');
});

app.post("/result", (req, res) => {
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
  res.render('welcome', {name: name, age: age});
});

app.listen(3000);
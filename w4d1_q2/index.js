const express = require('express');
const session = require('express-session');
const path = require('path');

const app = express();

app.use(express.urlencoded({extended: false}));
app.use(session({secret: "notverysecretsecret"}));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, "/index.html"));
});

app.post("/result", (req, res) => {
  const name = req.body.name ? req.body.name : "person";
  const age = req.body.age ? req.body.age: 0;
  req.session["info"] = {
    name: name,
    age: age
  };
  res.redirect('/output');
});

app.get('/output', (req, res) => {
  const info = req.session["info"] ? req.session["info"] : {name: "person", age: 0};
  res.send(`Welcome ${info.name}, ${info.age} years old.`);
});

app.listen(3000);
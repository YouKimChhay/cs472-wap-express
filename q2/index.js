const express = require('express');
const path = require('path');

const app = express();

app.use(express.urlencoded());

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, "/index.html"));
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

  /*
  when we don't redirect in post request and send the response directly,
  the user can actually click backward and forward button in the browser,
  and the data previously input actually persist.

  If we bookmark the /result page and visit the page later,
  we actually do a get request, and since we dont have a get request for /result,
  there's also no response!
  */
});

app.listen(3000);
const express = require('express');
const cookieParser = require('cookie-parser');
const path = require('path');

const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.urlencoded({extended: false}));
app.use(cookieParser());

app.get('/', (req, res) => {
  res.render('index', {cookies: req.cookies});
});

app.post('/addCookie', (req, res) => {
  const key = req.body.key;
  const val = req.body.val;

  if (!key || !val) {
    res.redirect('/');
  }

  res.cookie(key, val);
  res.redirect('/');
});

app.listen(3000, () => {
  console.log("Server is running...");
});
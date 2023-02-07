const express = require('express');
const path = require('path');

const app = express();

app.use(express.urlencoded({extended:false}));
app.use('/js', express.static(path.join(__dirname, 'js')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

const answer = [ "It is Certain", "It is decidedly so", "Without a doubt", "Yes definitely", "You may rely on it", "As I see it, yes",
"Most likely", "Outlook good", "Yes", "Signs point to yes", "Reply hazy, try again", "Ask again later",
"Better not tell you now", "Cannot predict now", "Concentrate and ask again", "Don't count on it",
"My reply is no", "My sources say no", "Outlook not so good", "Very doubtful" ];

app.get('/8ball', (req, res) => {
  const randomNumber = Math.floor(Math.random() * answer.length);
  res.send(answer[randomNumber]);
});

app.listen(3000, () => {
  console.log("Server is running...");
});
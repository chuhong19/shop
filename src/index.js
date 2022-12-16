const express = require('express');
const path = require('path');
const {engine} = require('express-handlebars');
const app = express();
const port = 3000;

app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources\\views'));
app.engine('hbs', engine({extname: '.hbs'}));

app.get('/', (req, res) => {
  res.render('home');
})

app.get('/news', (req, res) => {
  res.render('news');
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
const express = require('express');
const path = require('path');
const {engine} = require('express-handlebars');
const app = express();
const port = 3000;

//const route = require('./routes');
//route(app);

const db = require('./config');
db.connect();

app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources\\views'));
app.engine('hbs', engine({extname: '.hbs'}));

app.use(express.urlencoded({
  extended: true
}));
app.use(express.json());

app.get('/', (req, res) => {
  res.render('home');
})

app.get('/search', (req, res) => {
  res.render('search');
})

app.post('/search', (req, res) => {
  res.json(req.body);
})

app.get('/login', (req, res) => {
  res.render('accounts/login');
})

app.get('/register', (req, res) => {
  res.render('accounts/register');
})

app.get('/account/create', (req, res) => {
  res.render('account/register');
})

app.post('/account/store', (req, res) => {
  res.json(req.body);
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
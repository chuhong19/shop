const express = require('express');
const path = require('path');
const {engine} = require('express-handlebars');
const app = express();
const port = 3000;
const jwt = require('jsonwebtoken');
const methodOverride = require('method-override');
const cookieParser = require('cookie-parser');
const session = require('express-session');

app.use(methodOverride('_method'));

app.use(cookieParser());

/*
app.use(session({
    resave: true, 
    saveUninitialized: true, 
    secret: 'somesecret', 
    cookie: { maxAge: 60000 }}));
*/
const route = require('./routes');

const db = require('./config');
db.connect();

app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources\\views'));
app.engine('hbs', engine({extname: '.hbs'}));

app.use(express.urlencoded({
  extended: true
}));
app.use(express.json());


route(app);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
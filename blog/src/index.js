const path = require('path');
const express = require('express');
const morgan = require('morgan');
const handlebars = require('express-handlebars').engine;
const app = express();
const port = 3000;

const route = require('./routes');
const db = require('./config/db');
// Connect to DB
db.connect();


app.use(express.static(path.join(__dirname, 'public')));
// HTTP logger

app.use(
    express.urlencoded({
        extended: true,
    }),
); // middleware
app.use(express.json());

app.use(morgan('combined'));

//Template engine
app.engine(
    'hbs',
    handlebars({
        extname: '.hbs',
    }),
);
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources', 'views'));

// routes init
route(app);
//127.0.1 : localhost

app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
});

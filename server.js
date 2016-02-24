var express = require('express');
var app = express();
var methodOverride = require('method-override');
var bodyParser = require('body-parser');          // pull information from HTML POST
var morgan = require('morgan');
var mysql = require('mysql');

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({'extended':'false'}));

//Serve static content for the app from the "public" directory in the application directory.
app.use(express.static(__dirname + '/public'));

// override with POST having ?_method=DELETE
app.use(methodOverride('_method'));

//Set handlebar engine for express and default layout
var exphbs = require('express-handlebars');
app.engine('handlebars', exphbs({
    defaultLayout: 'main'
}));
app.set('view engine', 'handlebars');

var routes = require('./controllers/burger_controller.js');
app.use('/', routes);
app.use('/create', routes);
app.use('/update', routes);
app.use('/delete', routes);


var envs = require('dotenv').config({silent: true});
var PORT = process.env.PORT || 3000;

// server.js

// modules =================================================
//require and use express
var express = require('express'),
    app = express();

//create the router to be used to create links
var router = express.Router();
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var exphbs = require('express-handlebars');



// set the static files location /public/img will be /img for users
app.use(express.static(__dirname + '/public'));
app.set('views', __dirname + '/public/views');
app.engine('.hbs', exphbs({
    extname: '.hbs',
    defaultLayout: __dirname +
        '/public/views/layouts/main.hbs',
    partialsDir: __dirname +
        '/public/views/partials',
    layoutsDir: __dirname + '/public/views/layouts'
}));
app.set('view engine', '.hbs');


// configuration ===========================================

// config files
var db = require('./config/db');
// set our port
var port = process.env.PORT || 3000;

// get all data/stuff of the body (POST) parameters
// parse application/json 
app.use(bodyParser.json());

// parse application/vnd.api+json as json
app.use(bodyParser.json({
    type: 'application/vnd.api+json'
}));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({
    extended: true
}));

// override with the X-HTTP-Method-Override header in the request. simulate DELETE/PUT
app.use(methodOverride('X-HTTP-Method-Override'));

// routes ==================================================
require('./app/routes/main-routes')(router); // configure our routes

//use the router
app.use('/', router);

// START THE SERVER
// ==============================================
app.listen(port);
console.log('Magic happens on port ' + port);

// expose app           
exports = module.exports = app;

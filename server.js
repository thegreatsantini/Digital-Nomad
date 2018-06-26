// Modules I need for running this app
require('dotenv').config(); // Loads the .env
var bodyParser = require('body-parser');
const morgan = require('morgan');
var express = require('express');
var expressLayouts = require('express-ejs-layouts');
var flash = require('connect-flash');
var isLoggedIn = require('./middleware/isLoggedIn');
var mongoose = require('mongoose');
var passport = require('./config/passportConfig');
var session = require('express-session');
const indexRoute = require('./routes/index');
const profileRoute = require('./routes/profile');



//App Variable
var app = express();

// Connect to the database
mongoose.connect('mongodb://localhost/digitalNomad');

// Set and use statements
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: false}));
app.use(expressLayouts);
app.use(session({
	secret: process.env.SESSION_SECRET,
	resave: false,
	saveUninitialized: true
}));
app.use(flash());
app.use(passport.initialize());
app.use(passport.session());
app.use(express.static('public'));
app.use(morgan('tiny'))

// Just a convenience, but makes life easier...

app.use(function(req, res, next) {
	res.locals.currentUser = req.user;
	res.locals.alerts = req.flash();
	next();
});


// Top-level Routes
app.use('/', indexRoute);
app.use('/profile', profileRoute);
app.use('/auth', require('./routes/auth'));


// Listen

app.listen(process.env.PORT || 3000);

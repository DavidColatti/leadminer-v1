require('dotenv').config();

const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const express = require('express');
const mongoose = require('mongoose');
const logger = require('morgan');
const path = require('path');
const cors = require('cors');
const session = require('express-session');
const passport = require('./config/passport');
// const main = require('./scrapers/angies');
const searchYelp = require('./scrapers/yelp');

// MongoDB connection to atlas or compass
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost/leadminer';
console.log('Connecting DB to ', MONGODB_URI);

mongoose
	.connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
	.then((x) => console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`))
	.catch((err) => console.error('Error connecting to mongo', err));

// scrapers
// let angiesId = 25084440;
// setInterval(function() {
// 	console.log(angiesId);
// 	main(angiesId, 10);
// 	angiesId += 20;
// }, 7000);

// 12 * 60 * 60 * 1000

// yelp will take a searched input of query in SearchTools component
// searchYelp('lawyer', 'miami');

///////////////

const app_name = require('./package.json').name;
const debug = require('debug')(`${app_name}:${path.basename(__filename).split('.')[0]}`);

const app = express();

app.use(
	cors({
		credentials: true,
		origin: [
			'http://localhost:3000',
			'https://distracted-noyce-fee0e2.netlify.com',
			'https://leadminerapp.herokuapp.com'
		] //Swap this with the client url
	})
);

// app.use(cors({
//   origin: function(origin, callback){
//     return callback(null, true);
//   },
//   optionsSuccessStatus: 200,
//   credentials: true
// }));

app.use(
	session({
		resave: false,
		saveUninitialized: true,
		secret: 'secret',
		cookie: { maxAge: 1000 * 60 * 60 }
	})
);

app.use(passport.initialize());
app.use(passport.session());

//app.use(express.static(path.join(__dirname, 'public')));

app.use(express.static(path.join(__dirname, '../frontend/build')));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(logger('dev'));

const index = require('./routes/index');
const auth = require('./routes/auth');
const leads = require('./routes/leads');
app.use('/', index);
app.use('/', auth);
app.use('/', leads);

// Uncomment this line for production
let client = path.join(__dirname + '../public/index.html');
console.log('client', client);
//app.get('*', (req, res) => res.sendFile(client));
// For any other routes, redirect to the index.html file of React
// app.get('*', (req, res) => {
//   res.sendFile(path.join(__dirname, '../frontend/build/index.html'))
// })
module.exports = app;

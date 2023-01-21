// Env variables
const express = require('express');
const app = express();
const PORT = 2005;
const mongoose = require('mongoose');
const connectDB = require('./config/database.js');
const multer = require('multer');
const logger = require("morgan");
const passport = require("passport");
const LocalStrategy = require('passport-local');
const session = require('express-session');
const MongoStore = require('connect-mongo');
const flash = require("express-flash");
const methodOverride = require("method-override");

//Use .env file in config folder
require('dotenv').config({ path: './config/.env' });

//Routes
const homeRoutes = require('./routes/home');
const authRoutes = require('./routes/auth');



//Connect to database
connectDB();

// Middleware
app.set('view engine', 'pug'); // pug
app.use(express.static('public')); // app.use works! app.get doesn't 
app.use(express.urlencoded({ extended: true }));


// Routes
app.use('/', homeRoutes);
app.use('/auth', authRoutes);


//Body Parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Logging
app.use(logger("dev"));

//Use forms for put / delete
app.use(methodOverride("_method"));

// Passport middleware
// app.use(passport.initialize());
// app.use(passport.session());

//Use flash messages for errors, info, ect...
app.use(flash());


app.listen(PORT, () => console.log(`Server is running YO! Port: ${PORT}`));
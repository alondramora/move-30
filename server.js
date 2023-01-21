// Env variables
const express = require('express');
const app = express();
const PORT = 2005;
const mongoose = require('mongoose');
const connectDB = require('./config/database.js');
const multer = require('multer');
const passport = require("passport");
const session = require("express-session");
require('dotenv').config({ path: './config/.env' });

//Routes
const homeRoutes = require('./routes/home');


//Connect to database
connectDB();

// Middleware
app.set('view engine', 'pug'); // pug
// app.set('views', 'views');  // pug, not sure if I will need this yet
app.use(express.static('public')); // app.use works! app.get doesn't 
app.use(express.urlencoded({ extended: true }));


// Routes
app.use('/', homeRoutes);



app.listen(PORT, () => console.log(`Server is running YO! Port: ${PORT}`));
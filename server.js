// Env variables
const express = require('express');
const app = express();
const PORT = 2005;
const mongoose = require('mongoose');

const connectDB = require('./config/database.js');
const homeRoutes = require('./routes/home');
require('dotenv').config({ path: './config/.env' });

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
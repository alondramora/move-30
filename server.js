// Env variables
const express = require('express');
const app = express();
const PORT = 8001;
const mongoose = require('mongoose');

const connectDB = require('./config/database.js');
const homeRoutes = require('./routes/home');
require('dotenv').config({ path: './config/.env' });

//Connect to database
connectDB();

// Middleware
app.set('view engine', 'ejs');
app.set(express.static('public'));
app.use(express.urlencoded({ extended: true }));


// Routes
app.use('/', homeRoutes);



app.listen(PORT, () => console.log(`Server is running YO! Port: ${PORT}`));
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
app.set('views', 'views');  // pug
app.set(express.static('public'));
app.use(express.urlencoded({ extended: true }));
// app.get('/', (req, res, next) => {
//     res.status(200).render('home')
// }) // pug


// Routes
app.use('/', homeRoutes);



app.listen(PORT, () => console.log(`Server is running YO! Port: ${PORT}`));
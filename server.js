// Env variables
const express = require('express');
const app = express();
const PORT = 2005;
const mongoose = require('mongoose');
const connectDB = require('./config/database.js');
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
// app.get('/', (req, res) => {
//     res.json({ message: 'success' })
// });
app.use('/', homeRoutes);



app.listen(PORT, () => console.log(`Server is running YO! Port: ${PORT}`));
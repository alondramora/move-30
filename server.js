// Env variables
const express = require("express");
const app = express();
const PORT = 2005;
const mongoose = require("mongoose");
const connectDB = require("./config/database.js");
const multer = require("multer");
const logger = require("morgan");
const passport = require("passport");
const LocalStrategy = require("passport-local");
const session = require("express-session");
const MongoStore = require("connect-mongo");
const flash = require("express-flash");
const methodOverride = require("method-override");

// Getting rid of mongoose deprication warning
mongoose.set("strictQuery", true);

//Use .env file in config folder
require("dotenv").config({ path: "./config/.env" });

//Passport config
require("./config/passport")(passport);

//Connect to database
connectDB();

//Routes
const homeRoutes = require("./routes/home");
const authRoutes = require("./routes/auth");

// Middleware
app.set("view engine", "pug"); // pug
app.use(express.static("public")); // app.use works! app.get doesn't

//Body Parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Logging
app.use(logger("dev"));

//Use forms for put / delete
app.use(methodOverride("_method"));

//Use flash messages for errors, info, ect...
app.use(flash());

// Setup Sessions - stored in MongoDB
app.use(
  session({
    secret: "keyboard cat",
    resave: false,
    saveUninitialized: false,
    store: new MongoStore({ mongoUrl: process.env.DB_CONNECTION }),
  })
);

// Passport middleware
app.use(passport.initialize());
app.use(passport.session());

// Routes
app.use("/", homeRoutes);
app.use("/auth", authRoutes);

app.listen(PORT, () => console.log(`Server is running YO! Port: ${PORT}`));

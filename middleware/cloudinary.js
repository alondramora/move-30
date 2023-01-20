const cloudinary = require("cloudinary").v2;

require("dotenv").config({ path: "./config/.env" }); // our secrets are in env so we look there for them

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET,
});

module.exports = cloudinary;
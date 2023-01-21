const User = require('../models/users.js'); // import User schema
const Post = require('../models/post.js'); // import Post schema
const cloudinary = require("../middleware/cloudinary");


module.exports = {
      getLogin: async (req, res) => {
        try {
            res.render('login'); 
        } catch (err) {
            console.log(err);
            return res.status(500).send(err);
        }
    },
        getSignup: async (req, res) => {
        try {
            res.render('signup'); 
        } catch (err) {
            console.log(err);
            return res.status(500).send(err);
        }
    },
    
};
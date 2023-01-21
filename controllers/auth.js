const User = require('../models/users.js'); // import User schema
const Post = require('../models/post.js'); // import Post schema
const cloudinary = require("../middleware/cloudinary");


module.exports = {
     loginUser: async (req, res) => {
        try {
            console.log(`You passed the vibe check`) // logged in
        } catch (err) {
            console.log('You did NOT pass the vibe check') // not logged in
            if (err) return res.status(500).send(err);
        }
    },   
};
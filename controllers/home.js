const User = require('../models/users.js');
const Post = require('../models/post.js');
const cloudinary = require("../middleware/cloudinary");


module.exports = {

    //Render the index page
    getIndex: async (req, res) => {
        try {
            const users = await User.find();
            res.render('index', { user: users });
        } catch (err) {
            if (err) return res.status(500).send(err);
        }
    },

    // Render the About page - might delete later
    getAbout: async (req, res) => {
        try {
            res.render('about'); 
        } catch (err) {
            console.log(err);
            return res.status(500).send(err);
        }
    },
    
    //Create a new post
    createPost: async (req, res) => { 
        try {
            //upload image to cloudinary
            const result = await cloudinary.uploader.upload(req.file.path);

            await Post.create({ // referencing our model to create a new post
                caption: req.body.caption,
                image: result.secure_url,
                cloudinaryId: result.public_id,
                // user: req.User.id, - need to attach user to posts 
                likes: 0,
            });
            console.log(Post);
            console.log('Post has been added!')
            res.redirect('/');
        } catch (err) {
            console.log(err);
            return res.status(500).send(err);
        }
    },
    // createUser: async (req, res) => {
    //     const newUser = new User(
    //         {
    //             firstName: req.body.firstName,
    //         })
    //     try {
    //         await newUser.save();
    //         console.log(newUser);
    //         res.redirect('/');
    //     } catch (err) {
    //         if (err) res.status(500).send(err);
    //         res.redirect('/');
    //     }
    // },
};
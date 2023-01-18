const User = require('../models/users.js');
const Post = require('../models/post.js');

module.exports = {
    getIndex: async (req, res) => {
        try {
            const users = await User.find();
            res.render('index', { user: users });
        } catch (err) {
            if (err) return res.status(500).send(err);
        }
    },
    getAbout: async (req, res) => {
        console.log('hello') // this is here to see if it's working
        try {
            res.render('about'); 
        } catch (err) {
            console.log(err);
            return res.status(500).send(err);
        }
    },
    createPost: async (req, res) => {
        const newPost = new Post( // use the Entry model to create a new entry
            {
                caption: req.body.caption, // send the "caption" from the form body that is being sent
                
            })
        try {
            await newPost.save(); // saves the new entry to the database
            console.log(newPost);
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
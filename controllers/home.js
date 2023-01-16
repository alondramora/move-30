const User = require('../models/users.js');

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
    createUser: async (req, res) => {
        const newUser = new User(
            {
                firstName: req.body.firstName,
            })
        try {
            await newUser.save();
            console.log(newUser);
            res.redirect('/');
        } catch (err) {
            if (err) res.status(500).send(err);
            res.redirect('/');
        }
    },
};
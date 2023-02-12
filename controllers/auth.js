const User = require('../models/users.js'); // import User schema
const Post = require('../models/post.js'); // import Post schema
const cloudinary = require("../middleware/cloudinary");
const passport = require("passport");
const validator = require("validator");

module.exports = {
    // render the login page
    getLogin: async (req, res) => {
        try {
            res.render('login');
        } catch (err) {
            console.log(err);
            return res.status(500).send(err);
        }
    },
    // render the sign up page
    getSignup: async (req, res) => {
        try {
            res.render('signup');
        } catch (err) {
            console.log(err);
            return res.status(500).send(err);
        }
    },
    postSignup: async (req, res, next) => {
        const validationErrors = []; // an array where we push error messages into
        if (!validator.isEmail(req.body.email)) // if the email, is NOT a valid email
            validationErrors.push({ msg: "Please enter a valid email address." }); // push this error msg into the validation Errors array
        if (!validator.isLength(req.body.password, { min: 8 })) // if the length of the password is not a min of 8 characters
            validationErrors.push({
                msg: "Password must be at least 8 characters long", // push this error msg into the validation Errors array
            });
        if (req.body.password !== req.body.confirmPassword) // if the password does not equal the confirm password 
            validationErrors.push({ msg: "Passwords do not match" }); // push this error msg into the validation Errors array

        if (validationErrors.length) { // if there is something in the validation errors array
            req.flash("errors", validationErrors); // show the errors?
            return res.redirect("../auth/signup");
        }
        req.body.email = validator.normalizeEmail(req.body.email, {
            gmail_remove_dots: false,
        });

        const user = new User({ // think I need to fix the properties that the User should have to match the User model
            // firstName: req.body.firstName, 
            email: req.body.email,
            password: req.body.password,
        });

        User.findOne(
            { $or: [{ email: req.body.email }] },
            (err, existingUser) => {
                if (err) {
                    return next(err);
                }
                if (existingUser) {
                    req.flash("errors", {
                        msg: "Account with that email address or username already exists.",
                    });
                    return res.redirect("../signup");
                }
                user.save((err) => {
                    if (err) {
                        return next(err);
                    }
                    req.logIn(user, (err) => {
                        if (err) {
                            return next(err);
                        }
                        res.redirect("/profile");
                    });
                });
            }
        );
    
    }

};

// exports.postLogin = (req, res, next) => {
//   const validationErrors = [];
//   if (!validator.isEmail(req.body.email))
//     validationErrors.push({ msg: "Please enter a valid email address." });
//   if (validator.isEmpty(req.body.password))
//     validationErrors.push({ msg: "Password cannot be blank." });

//   if (validationErrors.length) {
//     req.flash("errors", validationErrors);
//     return res.redirect("/login");
//   }
//   req.body.email = validator.normalizeEmail(req.body.email, {
//     gmail_remove_dots: false,
//   });

//   passport.authenticate("local", (err, user, info) => {
//     if (err) {
//       return next(err);
//     }
//     if (!user) {
//       req.flash("errors", info);
//       return res.redirect("/login");
//     }
//     req.logIn(user, (err) => {
//       if (err) {
//         return next(err);
//       }
//       req.flash("success", { msg: "Success! You are logged in." });
//       res.redirect(req.session.returnTo || "/profile");
//     });
//   })(req, res, next);
// };

// exports.logout = (req, res) => {
//   req.logout(() => {
//     console.log('User has logged out.')
//   })
//   req.session.destroy((err) => {
//     if (err)
//       console.log("Error : Failed to destroy the session during logout.", err);
//     req.user = null;
//     res.redirect("/");
//   });
// };

// exports.getSignup = (req, res) => {
//   if (req.user) {
//     return res.redirect("/profile");
//   }
//   res.render("signup", {
//     title: "Create Account",
//   });
// };

// exports.postSignup = (req, res, next) => {
//   const validationErrors = [];
//   if (!validator.isEmail(req.body.email))
//     validationErrors.push({ msg: "Please enter a valid email address." });
//   if (!validator.isLength(req.body.password, { min: 8 }))
//     validationErrors.push({
//       msg: "Password must be at least 8 characters long",
//     });
//   if (req.body.password !== req.body.confirmPassword)
//     validationErrors.push({ msg: "Passwords do not match" });

//   if (validationErrors.length) {
//     req.flash("errors", validationErrors);
//     return res.redirect("../signup");
//   }
//   req.body.email = validator.normalizeEmail(req.body.email, {
//     gmail_remove_dots: false,
//   });

//   const user = new User({
//     userName: req.body.userName,
//     email: req.body.email,
//     password: req.body.password,
//   });

//   User.findOne(
//     { $or: [{ email: req.body.email }, { userName: req.body.userName }] },
//     (err, existingUser) => {
//       if (err) {
//         return next(err);
//       }
//       if (existingUser) {
//         req.flash("errors", {
//           msg: "Account with that email address or username already exists.",
//         });
//         return res.redirect("../signup");
//       }
//       user.save((err) => {
//         if (err) {
//           return next(err);
//         }
//         req.logIn(user, (err) => {
//           if (err) {
//             return next(err);
//           }
//           res.redirect("/profile");
//         });
//       });
//     }
//   );
// };

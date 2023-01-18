const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
    caption: {
        type: String,
        required: true,
    },
    user: {
        type: mongoose.Schema.Types.ObjectId, // pulling in the User schema
        ref: "User",
    },
    publicId: {
        type: String,
    },
    image: {
        type: String,
        required: true,
    },
    cloudinaryId: {
    type: String,
    require: true,
  },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

module.exports = mongoose.model('Post', postSchema, 'posts');
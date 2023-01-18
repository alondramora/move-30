const mongoose = require('mongoose');

const entrySchema = new mongoose.Schema({
    caption: {
        type: String,
        required: true,
    },
    publicId: {
        type: String,
    },
    imageUrl: {
        type: String,
        required: false,
    },
    date: Date.now(),
    // image: {
    //     type:
    //     required: false;
    // }
});

module.exports = mongoose.model('Entry', entrySchema, 'entries');
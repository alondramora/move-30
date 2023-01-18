const mongoose = require('mongoose');

const entrySchema = new mongoose.Schema({
    caption: {
        type: String,
        required: true,
    },
    // image: {
    //     type:
    //     required: false;
    // }
});

module.exports = mongoose.model('Entry', entrySchema, 'entries');
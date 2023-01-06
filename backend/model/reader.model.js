const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const readerSchema = new Schema({
    userID: { type: String, required: true },
    Password: { type: String, required: true }
}, {
    timestamps: false,
});

const Reader = mongoose.model('Reader', readerSchema);
module.exports = Reader;
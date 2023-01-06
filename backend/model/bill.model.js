const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const customerbillSchema = new Schema({
    acc_number: { type: String, required: true },
    date: { type: String, required: true },
    reading: { type: String, required: true }
}, {
    timestamps: false,
});

const Bill = mongoose.model('Bill', customerbillSchema);
module.exports = Bill;
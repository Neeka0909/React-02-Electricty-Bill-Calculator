const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const customerSchema = new Schema({
    acc_number: { type: String, required: true },
    name: { type: String, required: true }
}, {
    timestamps: true,
});

const Customer = mongoose.model('Customer', customerSchema);
module.exports = Customer;
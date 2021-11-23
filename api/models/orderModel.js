'use strict'
const mongoose = require('mongoose');
let Schema = mongoose.Schema;

let OrderSchema = new Schema({
    items: {
        type: Object,
        required: 'Kindly enter the items'
    },
    total: {
        type: Number,
        required: 'Kindly enter the total price of the cart'
    }
});

module.exports = mongoose.model('Order', OrderSchema);
'use strict'
const mongoose = require('mongoose');
let Schema = mongoose.Schema;

let ProductSchema = new Schema({
    item: {
        type: String,
        required: 'Kindly enter the name of the product'
    },
    price: {
        type: Number,
        required: 'Kindly enter the price of the product'
    },
    src: {
        type: String,
    }
});

module.exports = mongoose.model('Product', ProductSchema);
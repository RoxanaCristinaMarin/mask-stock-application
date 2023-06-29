const mongoose = require('mongoose');

const orderSchema = mongoose.Schema({

    quantity: {
        type: Number,
        required: true 
    },
    product: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Product'
    },
    price: {
        type: Number,
        required: true
    }
})

module.exports = mongoose.model('Order', orderSchema)
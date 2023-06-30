const mongoose = require('mongoose');

const hospitalSchema = mongoose.Schema({

    name: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    country: {
        type: String,
        required: true
    },
    VAT: {
        type: String,
        required: true
    }
})

    module.exports = mongoose.model('Hospital', hospitalSchema)
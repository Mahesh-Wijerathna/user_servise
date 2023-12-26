//create model
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const touristSchema = new Schema({

    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    country: {
        type: String,
        required: true,
    },
    
    password: {
        type: String,
        required: true,
    },
    phoneNumber: {
        type: String,
        required: true,
    },
    token: {
        type: String,
        required: false,
    }


});

const Tourist = mongoose.model('Tourist', touristSchema);

module.exports = Tourist;
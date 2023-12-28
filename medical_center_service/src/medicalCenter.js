const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const medicalCenterSchema = new Schema({
    
    name: {
        type: String,
        required: true,
    },
    ownerName: {
        type: String,
        required: true,
    },
    address: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    telephone: {
        type: String,
        required: true,
    },
    username: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    nearestDestination: {
        type: String,
        required: true,
    },
    medicalCenterMedia: {
        type: String,
        required: true,
    },
    token: {
        type: String,
        required: false,
    }
});

const MedicalCenter = mongoose.model('MedicalCenter', medicalCenterSchema);

module.exports = MedicalCenter;

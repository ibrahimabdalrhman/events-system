const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
    },
    location: {
        type: String,
        default:'Egypt'
    },
    date: {
        type: Date,
        required: true,
    },
    createdAt: {
        type: Date,
        default: new Date(),
    }
});


const Event = mongoose.model('Event', eventSchema);
module.exports = Event;
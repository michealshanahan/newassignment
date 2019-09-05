const mongoose = require('mongoose' )
const Schema = mongoose.Schema

const reservationSchema = new Schema ({
    name: {
        type: String,
        required: true
    },
    userId: String,
    rewardsId: String,
    month: {
        type: Number,
        required: true
    },
    date: {
        type: Number,
        required: true
    },
    year: {
        type: Number,
        required: true
    },
    numberOfNights: {
        type: Number,
        required: true
    },
    shuttleRequest: {
        type: Boolean,
        default: false
    },
    shuttleTime: String

})

module.exports = mongoose.model('Reservations', reservationSchema)
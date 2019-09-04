const mongoose = require('mongoose')
const Schema = mongoose.Schema

const targetSchema = new Schema({
        firstName: {
            type: String,
            required: true
        },
        lastName: String,
        alive: {
            type: Boolean,
            default: true
        },
        bounty: {
            type: Number,
            required: true
        },
        type: String
})

module.exports = mongoose.model("Target", targetSchema)
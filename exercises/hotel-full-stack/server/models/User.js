const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema({
    userName: {
        type: String,
        required: true,
        lowercase: true,
        require: true
    },
    password: {
        type: String,
        required: true,
    },
    isAdmin: {
        type: Boolean,
        default: false
    },
    firstName: String,
    lastName: String,
    email: String 
}) 

module.exports = mongoose.model('User', userSchema)
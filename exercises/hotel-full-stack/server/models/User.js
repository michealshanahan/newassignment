const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema({
    userName: {
        type: String,
        require: true
    },
    firstName: String,
    lastName: String,
    email: String 
}) 

module.exports = mongoose.model('User', userSchema)
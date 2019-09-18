const express = require('express')
const mongoose = require('mongoose')
const app = express()
const expressJwt = require("express-jwt")
require('dotenv').config()
const port = 5566

app.use('/', express.json())

app.use('/users', require('./routers/UsersRouter'))
app.use('/api', expressJwt({ secret: process.env.SECRET}))
app.use('/reservations', require('./routers/ReservationsRouter'))

app.use((err, req, res, next) => {
    console.log(err)
    if(err.name === "UnauthorizedError"){
        res.status(err.status)
    }
    return res.send({ message: err.message})
})

mongoose.connect('mongodb://localhost:27017/users', {useNewUrlParser: true}).then(() => {
    console.log('connected to mongo')
})
.catch(err => {
    console.log(err)
})

mongoose.connect('mongodb://localhost:27017/reservations', {useNewUrlParser: true}).then(() => {
    console.log('connected to mongo')
})
.catch(err => {
    console.log(err)
})


app.listen(port, () => {
    console.log(`app is listening ${port}`)
})


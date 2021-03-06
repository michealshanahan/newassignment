const express = require('express')
const mongoose = require('mongoose')
const app = express()
const expressJwt = require("express-jwt")
require('dotenv').config()
const port = 5566



mongoose.connect('mongodb://localhost:27017/hotel', {useNewUrlParser: true}).then(() => {
    console.log('connected to mongo')
})
.catch(err => {
    console.log(err)
})


app.use('/', express.json())

app.use('/users', require('./routers/UsersRouter'))
app.use('/api', expressJwt({ secret: process.env.SECRET}))
app.use('/api/reservations', require('./routers/ReservationsRouter'))

app.use((err, req, res, next) => {
    console.log(err)
    if(err.name === "UnauthorizedError"){
        res.status(err.status)
    }
    return res.send({ message: err.message })
})



app.listen(port, () => {
    console.log(`app is listening ${port}`)
})


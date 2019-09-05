const express = require('express')
const mongoose = require('mongoose')
const app = express()
const port = 5566

app.use('/', express.json())

app.use('/users', require('./routers/UsersRouter'))
app.use('/reservations', require('./routers/ReservationsRouter'))

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


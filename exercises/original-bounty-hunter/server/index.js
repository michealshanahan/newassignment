const express = require('express')
const mongoose = require('mongoose')
const app = express()
const PORT = 3465

app.use('/', express.json())
app.use('/targets', require('./bountyRoutes'))

mongoose.connect('mongodb://localhost:27017/targets', {
    useNewUrlParser: true })
    .then(() =>{
        console.log('connected to Mongo')
    })
    .catch(err => {
        console.log(err)
    })

app.listen(PORT, () => {
    console.log(`App is listening on ${PORT}`)
})
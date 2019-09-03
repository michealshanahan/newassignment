const express = require('express')

const app = express()
const PORT = 4001



app.use('/', express.json())
app.use('/', require('./placeRoutes'))





app.listen(PORT, () => {
    console.log(`Listening to port${PORT}`)
})

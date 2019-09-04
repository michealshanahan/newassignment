const express = require('express')
const app = express()
const PORT = 3455

app.use('/', express.json())
app.use('/targets', require('./bountyRoutes'))

app.listen(PORT, () => {
    console.log(`App is listening on ${PORT}`)
})
const express = require('express')
const app = express()
const PORT = 6544

app.use('/', express.json())
app.use('/things', require('./bountyRouter.js'))

app.listen(PORT, ()=> {
    console.log(`listen ${PORT}`)
})


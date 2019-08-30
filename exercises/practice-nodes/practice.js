const express = require('express')
const app = express()
let PORT = 4000

app.listen(PORT, ()=> {
    console.log(`Listening on port${PORT}`)
})

app.get('/', (req, res) => {
    res.send('Hey.. get outta me')
})
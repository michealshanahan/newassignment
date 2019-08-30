const express = require('express')
const app = express()
const data = require('./data.json')
const PORT = 4001
const uuid = require('uuid/v4')

app.use('/', express.json())

app.get('/', (req, res) => {
    res.send(data)
})

app.post('/', (req, res)=> {
    const newPlace = req.body
    newPlace._id = uuid()
    data.push(newPlace)
    res.send({msg: 'good job',
    newPlace
    })
})

app.delete('/:_id', (req, res) => {
    const id = req.params._id
    const toDelete = data.findIndex(place => place._id === id)
    data.splice(toDelete, 1)
    res.send({
        msg: 'item deleted',
        data
    })
})

app.put('/:_id', (req, res) => {
    const updated = req.body
    data.forEach( place => {
        if( req.params._id === place._id ){
            console.log('hello')
            Object.assign(place, updated)
        }else {
            console.log('hiiiya')
            return place
        } 
    })
    res.send({
        msg: 'Have FUn',
        data
    })
})





app.listen(PORT, () => {
    console.log(`Listening to port${PORT}`)
})

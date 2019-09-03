const express = require('express')
const placeRouter = express.Router()
const data = require('./data.json')
const uuid = require('uuid/v4')

placeRouter.route('/')

    .get((req, res) => {
        res.send(data)
    })

    .post((req, res)=> {
        const newPlace = req.body
        newPlace._id = uuid()
        data.push(newPlace)
        res.send({msg: 'good job',
        newPlace
        })
    })

placeRouter.route('/:_id')

    .delete((req, res) => {
        const id = req.params._id
        const toDelete = data.findIndex(place => place._id === id)
        data.splice(toDelete, 1)
        res.send({
            msg: 'item deleted',
            data
        })
    })

    .put((req, res) => {
        let updated = req.body
        data.forEach( place => {
            if( req.params._id === place._id ){
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

module.exports = placeRouter


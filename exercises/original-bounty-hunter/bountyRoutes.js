const express = require('express')
const uuid = require('uuid/v4')
const targets = require('./target.json')
const bountyRouter = express.Router()


bountyRouter.route('/')
    .get((req, res) => {
        res.send(targets)
    })
    .post((req, res) => {
        let newTarget = req.body
        newTarget._id = uuid()
        targets.push(newTarget)
        res.send({
            msg: `added ${newTarget}`,
            targets
        })
    })

bountyRouter.route('/:_id')
    .get((req, res) => {
        res.send(targets.find(target => target._id === req.params._id))
    })
    .put((req,res) => {
        let id = req.params._id
        let updatedTarget = req.body
        targets.map(target => {
            target._id === id ? Object.assign(target, updatedTarget) : target
        })
        res.send(targets)
    })
    .delete((req, res) => {
        let id = req.params._id
        let index = targets.findIndex(target => { 
            return (id === target._id)
        })
        if(index >= 0){
            targets.splice(index, 1)
        }else{null}
        res.send(targets)
    })


module.exports = bountyRouter
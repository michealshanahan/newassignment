const express = require('express')
const bountyRoutes = express.Router()
const uuid = require('uuid/v4')
const targets = require('./target')

bountyRoutes.route('/')
    .get((req, res) =>{

        const { type, bounty } = req.query
        const keys = Object.keys(req.query)
        const results = []
        if( keys.length === 0 ){
            
            res.send(targets)
        }else{
            if(type && bounty){
                const names = targets.filter(target => target.type.toLowerCase() === type.toLowerCase() )
                const results = names.filter(name => name.bounty >= parseInt(bounty) )
                res.send ( results )
            }
            res.send( results )

        }
    })

    .post((req, res) => {
        const newTarget = req.body
        newTarget._id = uuid()
        targets.push(newTarget)
        res.send({
            msg: "object added",
            newTarget
        })
    })

bountyRoutes.route('/:_id') 
    .get((req, res) => {
       
        res.send(targets.find(target => target._id === req.params._id))

    })

    .put(( req, res ) =>{
        const updatedTarget = req.body
        targets.forEach(target => target._id === req.params._id ? Object.assign(target, updatedTarget) : target)
        res.send(`id:${req.params._id} updated`)
    })

    .delete((req, res ) => {
        const index = targets.findIndex(target => target._id === req.params._id)
        if(index < 0) return res.send('Item Not Found') 
        targets.splice(index, 1)
        res.send({
            msg: `item removed`,
            targets
        })
    })


module.exports = bountyRoutes
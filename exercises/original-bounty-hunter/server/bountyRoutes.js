const express = require('express')
const targets = require('./target.json')
const Target = require('./models/Target.js')
const bountyRouter = express.Router()


bountyRouter.route('/')
    .get((req, res) => {
        Target.find((err, Target) => {
            if (err) return res.status(500).send(err)
            return res.status(200).send(Target)
        })
    })
    .post((req, res) => {
        const newTarget = new Target(req.body)
        console.log(newTarget)
        newTarget.save(err => {
            if(err) return res.status(500).send(err)
            return res.status(201).send(newTarget)
        })
    
    })

bountyRouter.route('/:_id')
    
    .get((req, res) => {
        const _id = req.params._id
        Target.findById(_id, (err, target) => {
            if (err) return res.status(500).send(err)
            return res.status(200).send(target)
        })
        })
    .put((req,res) => {
        const _id = req.params._id
        Target.findByIdAndUpdate(_id,req.body, {new: true}, (err, target) => {
            if (err) return res.status(500).send(err)
            return res.status(200).send(target)
        })
    })
    .delete((req, res) => {
        const _id = req.params._id
        Target.findByIdAndDelete(_id, (err, target) => {
            if(err) res.status(500).send(err)
            return res.status(200).send(target)
        })
    })


module.exports = bountyRouter
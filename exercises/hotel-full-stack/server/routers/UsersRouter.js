const express = require('express')

const User = require('../models/User.js')
const userRouter = express.Router()

userRouter.route('/')
    
    .get((req, res) => {
        User.find((err, user) => {
            if(err) return  res.status(500).send(err)
            return res.status(200).send(user)
        })
    })

    .post((req, res) => {
        const newUser = new User(req.body)
        newUser.save(err => {
            if(err) return res.status(500).send(err)
            return res.status(201).send(newUser)
        })
    })

userRouter.route('/:_id')

    .get((req, res) => {
        const _id = req.params._id
        User.findById( _id, (err, user) => {
            if( err ) return res.status(500).send(err)
            return res.status(200).send(user)
        })
    })

    .put(( req, res ) => {
        const _id = req.params._id
        User.findByIdAndUpdate( _id, req.body, {new: true}, ( err, user ) => {
            if (err) return res.status(500).send(err)
            return res.status(200).send(user)
        } )
    })

    .delete(( req, res ) => {
        const _id = req.params._id
        User.findByIdAndDelete( _id, (err, user ) => {
            if( err ) return res.status(500).send(err)
            return res.status(200).send(user)
        })
    })

module.exports = userRouter


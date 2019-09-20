const express = require('express')

const User = require('../models/User.js')
const jwt = require("jsonwebtoken")
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

userRouter.post("/signup", (req, res, next) => {
    User.findOne({ username: req.body.username }, (err, existingUser) => {
        if( err ){
            res.status(500)
            return next(err)
        }else if ( existingUser !== null ){
            res.status(400)
            return next(new Error("User Name is Taken"))
        }
        const newUser = new User( req.body )
        newUser.save((err, user) => {
            if(err){ 
                res.status(500)
                return next(err)
            }
            const token = jwt.sign(user.toObject(), process.env.SECRET)
            return res.status( 201 ).send({user: user.toObject(), token})
        })
    })
})

userRouter.post("/login", (req, res, next) => {
    User.findOne({ username: req.body.username.toLowerCase() }, (err, user) => {
        if( err ){
            return next( err )
        }else if( !user || user.password !== req.body.password ) {
            res.status( 403 )
            return next( new Error( "Username or Password are Incorrect"))
        }
        const token = jwt.sign(user.toObject(), process.env.SECRET)
        return res.send({ token: token, user: user.toObject()})
    })
})

module.exports = userRouter


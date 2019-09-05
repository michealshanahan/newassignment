const express = require('express')

const Reservation = require('../models/Reservations.js')
const reservationRouter = express.Router()


reservationRouter.route('/')

    .get(( req, res ) => {
        Reservation.find(( err, user ) => {
            if ( err ) return res.status(500).send( err )
            return res.status( 200 ).send ( user )
        })
    })

    .post(( req, res ) => {
        const newReservation = new Reservation (req.body)
        newReservation.save(( err ) => {
            if ( err ) return res.status( 500 ).send( err )
            return res.status( 201 ).send(newReservation )
        })
    })


reservationRouter.route('/:_id')

    .get(( req, res ) => {
        const _id = req.params._id
        Reservation.findById( _id, ( err, reservation) => {
            if( err ) return res.status( 500 ).send( err)
            return res.status( 200 ).send( reservation )
        })
    })

    .put(( req, res ) => {
        const _id = req.params._id
        Reservation.findByIdAndUpdate(_id, req.body, {new: true}, (err, reservation) => {
            if ( err ) return res.status( 500 ).send( err )
            return res.status( 200 ).send( reservation )
        })
    })

    .delete(( req, res ) => {
        const _id = req.params._id
        Reservation.findByIdAndDelete(_id, (err, reservation ) => {
            if(err) return res.status( 500 ).send(err)
            return res.status( 200 ).send( reservation)
        })
    })





module.exports = reservationRouter
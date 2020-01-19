const express = require( 'express' )
const app = express()

const userRouter = express.Router()

userRouter.get('/users', (req, res, next) => {
    User.find((err, user)=> {
        if(err) {
            res.status(500)
            return next(err)
        }
        return res.status(200).send(user)
    })
})


module.exports = userRouter
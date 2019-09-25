import React, { Component } from 'react'
import { withUser } from '../UserProvider'

class UserProfile extends Component{
    constructor(){
        super()
        this.state={
            editProfile: false
        }
    }

    componentDidMount(){
        this.props.getReservations()
    }


    mappedReservation = () => {
        return this.props.reservations.map( reservation => {
            let { _id, title } = reservation
            return(
                <div key = {_id} >Reservation { title } </div>
            )
        })
    }
    

    render(){
        return(
            <div>

                <div>Welcome {this.props.user.firstName}</div>
                <button onClick = {()=>console.log(this.props.reservations)} >Console Log User Profile Props </button>
                <button onClick = {()=> this.props.history.push('/newreservation') }>New Reservation</button>
                {this.mappedReservation()}
            </div>
        )
    }
}

export default withUser( UserProfile )
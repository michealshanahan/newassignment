import React, { Component } from "react"
import { Calendar, momentLocalizer } from 'react-big-calendar'
import moment from 'moment'
import { withUser } from "../UserProvider"

import "react-big-calendar/lib/css/react-big-calendar.css" 






class MyCalendar extends Component {



    componentDidMount(){
        this.props.staffGetReservations()
    }
    // causes calendar to crash when view is switched


    localizer = momentLocalizer(moment)
    
    render(){
        // const events = this.props.reservations
        // events.unshift({
        //     title: 
        // })
        return(
            <div className = "calendar" >
                <Calendar
                    localizer = { this.localizer }
                    events = {this.props.reservations }
                    startAccessor = "start"
                    endAccessor = "end"
                />
            </div>
        )
    }
}

export default withUser( MyCalendar )
import React, { Component } from 'react'
import { withUser } from '../UserProvider'

import MyCalendar from './Calendar'

class StaffCalendar extends Component {


   

    render(){
        return (
            <div className = "calendar" >
                <MyCalendar />
            </div>
        )

    }
}

export default withUser(StaffCalendar)
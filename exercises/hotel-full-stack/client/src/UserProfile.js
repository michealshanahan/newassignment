import React, { Component } from 'react'
import { withUser } from './UserProvider'

class UserProfile extends Component{
    constructor(){
        super()
        this.state={}
    }
    render(){
        return(
            <div>This is the Profile</div>
        )
    }
}

export default withUser( UserProfile )
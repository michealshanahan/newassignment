import React, { Component } from 'react'
import axios from "axios"


const { Consumer, Provider } = React.createContext()

class UserProvider extends Component{
    constructor(){
        super()
        this.state = {
            user: JSON.parse(localStorage.getItem( "user" )) || {},
            token: localStorage.getItem( "token" ) || ""
        }
    }
 
    signup = (userInfo) => {
        axios.post("/users/signup", userInfo).then(res => {
            const { user, token } = res.data
            this.setState({ user, token })
            localStorage.setItem( "user", JSON.stringify( user ) )
            console.log(JSON.stringify(user))
            localStorage.setItem( "token", token )
            return res
        })
    }

    render(){
        return(
            <Provider value = {{
                signup: this.signup,
                ...this.state
            }} >
                {this.props.children}
            </Provider>
        )
    }
}

export default UserProvider
export const withUser = (Comp) => {
    return props => 
    <Consumer>
        {value => <Comp {...value } {...props} />}
    </Consumer>
}
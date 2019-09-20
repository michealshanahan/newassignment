import React, { Component } from "react"
import { withUser } from "./UserProvider"

class UserLogin extends Component{
    constructor(){
        super()
        this.state = {
            username: '',
            password: ''
        }
    }

    render(){

        const handleChange = (e) => {
            const { name, value } = e.target
            this.setState({ [name]: value })
        }

        const handleSubmit = (e) => {
            e.preventDefault()
            this.props.login( this.state )
            .then( res => this.props.history.push('/userprofile'))

        }

        return(
            <div>
                <form onSubmit = {handleSubmit} >
                    <input name = "username" value = {this.state.username} placeholder = "User Name" type="text" onChange = {handleChange} />
                    <input name = "password" type="text" value = {this.state.password} placeholder = "Password" onChange = {handleChange} />
                    <button>Enter</button>
                </form>
            </div>
        )
    }
}

export default withUser( UserLogin )
import React, { Component } from 'react'
import { withUser } from "./UserProvider"

class UserSignup extends Component {
    constructor(){
        super()
        this.state = {
            firstName: '',
            lastName: '',
            phone: '',
            email: '',
            username: '',
            password: ''

        }
    }

    render(){
        const handleChange = (e) => {
            const {name, value} = e.target
            this.setState({ [name] :  value  })
        }

        const handleSubmit = (e) => {
            e.preventDefault()
            
            this.props.signup( this.state )
            .then(res => {
                console.log(this.props)
                this.props.history.push( "/userprofile")
            }
            )
        } 

        return(
            <div>
                <form onSubmit = { handleSubmit }>
                    <input name = "firstName" placeholder = "First Name" value = {this.state.firstName} onChange = {handleChange} />
                    <input name = "lastName"  placeholder = "Last Name"  value = {this.state.lastName} onChange = {handleChange} />
                    <input name = "phone" placeholder = "Phone Number"  value = {this.state.phone} onChange = {handleChange} />
                    <input name = "username" placeholder = "User Name"  value = {this.state.username} onChange = {handleChange} />
                    <input name = "password" placeholder = "password"  value = {this.state.password} onChange = {handleChange} />
                    <button>Join</button>
                </form>
                <div>This is the UserSignup</div>
            </div>
        )
    }
}

export default withUser(UserSignup)
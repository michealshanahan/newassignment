import React, { Component } from 'react'
import { withUser } from "../UserProvider"
import DatePicker from '../DatePicker'


class UserSignup extends Component {
    constructor(){
        super()
        this.state = {
            firstName: '',
            lastName: '',
            phone: '',
            email: '',
            username: '',
            password: '',
            confirmPassword: "",
            errorMessage: '',
            isAdmin: false

        }
    }

    handleChange = (e) => {
        let {name, value} = e.target
        name === "isAdmin" ? this.setState(prev => {
            return {isAdmin: !prev.isAdmin}
        })
        :
        this.setState({ [name] :  value  })
        
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.state.password === this.state.confirmPassword ? 
            this.props.signup(this.state)
                .then(() => this.props.history.push("/userprofile"))
                .catch( err => {
                    console.log(err.response.data.message)
                    this.setState({ errorMessage: err.response.data.message })
                })
        : this.setState({errorMessage: "Passwords Must Match"})

    } 

    render(){

        return(
            <div>
                
                <form className = "sign-up" onSubmit = { this.handleSubmit }>
                    For the purpose of this demo I have added  the ability to sign up as an administrator. Administrators are able to view, create and delete reservations for others, and access the Reservation Calendar.<br></br>
                    
                    !this.props.token ? 
                        <React.Fragment>
                            <h3>Welcome to Oak Springs</h3>
                            <h4>Sign up</h4>
                        </React.Fragment>
                    :
                        <React.Fragment>
                            <h3>Edit Profile</h3>
                        </React.Fragment>
                    <div className = "form-wrapper" >
                        First Name 
                        <br/>
                        <input className = "form-input" name = "firstName" value = {this.state.firstName} onChange = {this.handleChange} />
                        <br/>
                        Last Name 
                        <br/>
                        <input className = "form-input" name = "lastName"   value = {this.state.lastName} onChange = {this.handleChange} />
                        <br/>
                        Phone Number 
                        <br/>
                        <input className = "form-input" name = "phone" value = {this.state.phone} onChange = {this.handleChange} />
                        <br/>
                        Username
                        <br/>
                        <input className = "form-input" name = "username"   value = {this.state.username} onChange = {this.handleChange} />
                        <br/>
                        Password 
                        <br/>
                        <input className = "form-input" name = "password"   value = {this.state.password} onChange = {this.handleChange} />
                        <br/>
                        Confirm Password 
                        <br/>
                        <input className = "form-input" name = "confirmPassword"   value = {this.state.confirmPassword} onChange = {this.handleChange} />
                        <br/>
                        Administrator:
                        <input className = "form-input" type = "checkbox" checked = {this.state.isAdmin} name = "isAdmin" value ={this.state.isAdmin} onChange = {this.handleChange} ></input>
                        
                        <button>Join</button>

                    </div>
                </form>
                <button onClick = {()=> console.log(this.state)} >propss</button>
                <DatePicker />
            
                {this.state.errorMessage && <div className = "error-message" >{this.state.errorMessage}</div>}
            </div>
        )
    }
}

export default withUser(UserSignup)
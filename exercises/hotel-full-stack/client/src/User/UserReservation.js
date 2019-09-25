import React, { Component } from 'react'
import { withUser } from "../UserProvider"

class UserReservation extends Component{
    constructor(){
        super()
        this.state = {
            title: '',
            start: '',
            end: "",
            shuttleTime: '',
            shuttleLocation: ''

        }
    }
    componentDidMount(){
        this.setState({
            name: `${this.props.user.firstName} ${this.props.user.lastName}`,
            
        })
    }

    handleChange = (e) => {
        let { name, value } = e.target
        this.setState({ [name]: value})
    }
    handleSubmit = (e) => {
        e.preventDefault()
        this.props.addToCart( this.state )
        this.props.history.push('/confirm')
        
    }

    render(){

        return(
            <div>
                <button onClick = {()=> console.log(this.state)}>console log UserReservation Props</button>
                <form onSubmit = {this.handleSubmit} >
                    <input type="text" name = "title" placeholder = "Name" value = {this.state.title} onChange = {this.handleChange }/>
                    <input type="date" name = "start" placeholder = "Start Date" value = {this.state.start} onChange = {this.handleChange }/>
                    <input type="date" name = "end" placeholder = "End Date" value = {this.state.end} onChange = {this.handleChange }/>
                    <button>Create Reservation</button>

                </form>
              
            </div>
        )
    }

}

export default withUser( UserReservation )


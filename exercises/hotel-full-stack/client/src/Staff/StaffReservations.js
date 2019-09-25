import React, { Component } from 'react'
import { withUser } from '../UserProvider'




class StaffReservation extends Component{
    constructor(){
        super()
        this.state = {
            title: '',
            start: '',
            end: '',
            allDay: false,
            resources: '' 
        }
    }

   

    handleChange = (e) => {
        const { name, value } = e.target
        this.setState({ [name]: value })
    }

    handleSubmit = (e => {
        e.preventDefault()
        console.log(this.state)
        this.props.addToCart(this.state)
        this.props.history.push('/confirm')
        
    })

    render(){
        return(
            <div>
                <form onSubmit = {this.handleSubmit} >
                
                    <input name = "start" value = {this.state.start} type="date" onChange = {this.handleChange} />
                    <input name = "end" value = {this.state.end} type="date" onChange = {this.handleChange} />
                    <input name = "title" value = {this.state.title} type="text" onChange = {this.handleChange} />
                    <button>Submit</button>
                </form>
            </div>
        )
    }
}

export default withUser(StaffReservation)
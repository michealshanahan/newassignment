import React, { Component } from "react"
import DatePicker from "react-datepicker"

import "react-datepicker/dist/react-datepicker.css"

class SelectDate extends Component{
    constructor(){
        super()
        this.state = {
            startDate: new Date()
        }
    }

    handleChange = date => {
        this.setState({ startDate: date })
    }

    render(){
        return(
            <div>
                <DatePicker
                    selected = {this.state.startDate }
                    onChange = {this.handleChange}
                />
                <button onClick = {()=> console.log(this.state.startDate)}>Date Picker Props</button>

            </div>
        )
    }
}

export default SelectDate

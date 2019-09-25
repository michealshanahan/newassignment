import React, { Component } from 'react'

class Cortney extends Component{
    constructor(){
        super()
        this.state = {
            total : '',
            numberOne: '',
            numberTwo: ''
        }
    }
    handleChange = (e)=> {
        const { name, value } = e.target
        this.setState({[name]: value})
    }
    handleSubmit = (e) => {
        e.preventDefault()
        const x = this.state.numberOne * this.state.numberTwo
        this.setState({total: x})

    }

    render(){
        return(
            <div>
                <form action="" onSubmit = {this.handleSubmit}  >
                    <input onChange = {this.handleChange} placeholder = "First Number To Multiply" type="number" name = "numberOne" value = {this.state.numberOne}/>
                    <input onChange = {this.handleChange} placeholder = "Second Number To Multiply" type="number" name = "numberTwo" value = {this.state.numberTwo}/>
                    <button>Multiply</button>
                </form>
                <span className = "mike">
                    Total: {this.state.total}

                </span>

            
            </div>
        )
    }

}

export default Cortney

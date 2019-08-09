import React, {Component} from 'react'
import Namesout from './Namesout.js'

class NameForm extends Component {
    constructor(){
        super()
        this.state = {
            text: '',
            names: []
        }
    }

    changeText = event => {
        return(
            this.setState({
               text: event.target.value})
        )
    }
    pushName = event => {
        event.preventDefault()
        const {text, names} = this.state
        return(
            this.setState((prev) => {
                return {
                    names: [...prev.names, text],
                    text: ''
                }
            })
        )
    }
    render(){
        return(
            <form >
                <input value = {this.state.text} onChange = {this.changeText} ></input>
                <button onClick = {this.pushName}>Add Name</button>
                <h1 onChange = {this.changeText}>{this.state.text}</h1>
                <Namesout className = 'names' names = {this.state.names}/>
            </form>
        )
    }
}

export default NameForm
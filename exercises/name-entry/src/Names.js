import React, {Component} from 'react';
import Namesout from './Namesout';

class Names extends Component {
    constructor(){
        super()
        this.state = {
            text: '',
            names: []
        }
    }
    inputChange = (e) => {
        return(
            this.setState({text: e.target.value})
        )
    }
    inputDelete = (e) => {
        return(
            this.setState({text: ''})
        )
    }
    addName2 = (e) => {
        return(
            this.setState((prev) => {
                prev.names.push(this.state.text)
                return prev.names
            })
        )
    }
    addName = () => {
        this.addName2()
        this.inputDelete()
    }


    render() {
        return (
            <div>
                <input className = 'input' placeholder = 'Enter Name' value = {this.state.text} onChange = {this.inputChange} />
                <h1 className = 'text' onChange = {this.inputChange} >{this.state.text}</h1>
                <button className = 'button' onClick = {() => {this.addName() }}>Add Name</button>
                <Namesout className = 'names' names = {this.state.names}/>
            </div>
        )
    }
}


export default Names
import React, {Component} from 'react'
import Axios from 'axios'

class Form extends Component{
    constructor(props){
        super(props)
        this.state = {
            title: '',
            description:''
        }
    }
    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    handleSubmit = (event) => {
        event.preventDefault()
        

        Axios.post('https://api.vschool.io/mikeshanahan/todo/', this.state).then(res => {
            this.props.changeParentState(this.state)
        })

    }

    render(){
        return(
            <form onSubmit = {this.handleSubmit}>
                <input name = 'title' type="text" placeholder = 'Title' required className="form-text" value = {this.state.title} onChange = {this.handleChange} />
                <input name = 'description' type="text" placeholder = 'Description' className="form-text" value = {this.state.description} onChange = {this.handleChange} />
                <input name = 'price' type="number" placeholder = 'Price' className="form-text" value = {this.state.price} onChange = {this.handleChange} />
                <input name = 'imgUrl' type="text" placeholder = 'Image URL' className="form-text" value = {this.state.imgUrl} onChange = {this.handleChange} />
                <button className = 'button' >Submit</button>
            </form>
        )
    }
}

export default Form
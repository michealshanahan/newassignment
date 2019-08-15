import React, {Component} from 'react'
import Form from './Form.js'
import Todos from './Todos.js'
import Axios from 'axios'

import './App.css'

class App extends Component{
    constructor(){
        super()
        this.state = {
            todos: []
        }
    }
    componentDidMount() {
        Axios.get('https://api.vschool.io/mikeshanahan/todo/').then(res => {
            const todos = res.data
            this.setState({todos})
        })
    }
    changeParentState = (newTodo) => {
        return(
            this.setState(prev => {
                return {
                    todos: [...prev.todos, newTodo]
                }
            })
        )
    }
    render() {
        return(
           <div>
               <Form changeParentState = {this.changeParentState}/>
               <Todos todos={this.state.todos} />
           </div>
        )
        }
}

export default App
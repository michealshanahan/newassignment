import React, {Component} from 'react'
import Axios from 'axios'

class Todos extends Component {
    constructor (){
        super()
        this.state = {
            todoList: []
        }
    }

    componentWillReceiveProps (nextProps){
        this.setState({todoList: nextProps.todos})
    }
    deleteTodo = (id) => {
        Axios.delete(`https://api.vschool.io/mikeshanahan/todo/${id}`)
        return this.setState(prev => {
            const filtered = prev.filter(each =>{
                return each._id !== id
            })        
        })
    } 
    
    mappedTodos = () => {
        return this.state.todoList.map((todo, index) => {
            return (
            <div>
                <div key = {todo._id}>{todo.title} {todo.price}{todo.description}{todo.imgUrl} </div>
                <button onClick = {()=>this.deleteTodo(todo._id)} >Delete</button>
            </div>) 
        })
    }

    render(){
        return(
          this.mappedTodos()
        )
    }
}

export default Todos
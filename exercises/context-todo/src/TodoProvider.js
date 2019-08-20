import React, {Component} from 'react'

const {Consumer, Provider} = React.createContext()

class TodoProvider extends Component {
    constructor(){
        super()
        this.state = {
            ya: 0
        }
    }
    render() {
        return (
            <Provider value = {{...this.state}}>
                {this.props.children}
            </Provider>
        )
    }
}

export default TodoProvider

export const withTodo = (c) => {
    
}
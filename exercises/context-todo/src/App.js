import React from 'react'
import {withTodo} from './TodoProvider.js'

const App = (props) => {
    console.log(props)
    return(
        <div>This</div>
    )
}

export default withTodo(App)
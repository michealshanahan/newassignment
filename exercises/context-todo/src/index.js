import React from 'react'
import ReactDOM from 'react-dom'
import TodoProvider from './TodoProvider.js'
import App from './App.js'

ReactDOM.render(
    <TodoProvider>
        <App />
    </TodoProvider>
    , document.getElementById('root')
)
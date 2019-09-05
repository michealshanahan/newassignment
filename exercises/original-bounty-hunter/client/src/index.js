import React from 'react'
import ReactDOM from 'react-dom'
import App from './App.js'
import TargetProvider from './TargetProvider.js'


ReactDOM.render(
    <TargetProvider>
        <App />
    </TargetProvider>
    , document.getElementById('root'))
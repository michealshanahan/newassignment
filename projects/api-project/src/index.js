import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter} from 'react-router-dom'
import DrinkProvider from './DrinkProvider.js'

import App from './App.js'
 
ReactDOM.render(
    <DrinkProvider>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </DrinkProvider>
    , document.getElementById('root')
)
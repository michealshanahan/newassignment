import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter} from 'react-router-dom'
import DrinkProvider from './DrinkProvider.js'

import DrinkApp from './DrinkApp.js'
 
ReactDOM.render(
    <DrinkProvider>
        <BrowserRouter>
            <DrinkApp />
        </BrowserRouter>
    </DrinkProvider>
    , document.getElementById('root')
)